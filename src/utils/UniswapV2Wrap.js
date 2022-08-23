import {
    Fetcher,
    Trade,
    Token,
    TokenAmount,
    Percent
} from '@uniswap/sdk';
import {TokenList, WETH } from '../constants/TokenList';
import uniswapRouter02ABI from "../abis/uniswapRouter02ABI.json";
import { getEthersProvider } from "./EthersWrap";

const ethers = require('ethers');
const UNISWAP_ROUTER02_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

/**
 * @dev 获取精确输入token的最优交易路径
 * @param tokenIn 输入token
 * @param tokenInValue 输入token金额
 * @param tokenOut 输出token
 * @param slippageTolerance 滑点容忍度,比如0.5%就传0.5
 * @return Trade
 */
const getBestTradeExactIn = async (tokenIn, tokenInValue, tokenOut, slippageTolerance = "0.5") => {
    if (!tokenIn || !tokenInValue || !tokenOut || parseFloat(tokenInValue) === 0) {
        return;
    }
    if (tokenIn.symbol === 'ETH') {
        tokenIn = WETH;
    }
    if (tokenOut.symbol === 'ETH') {
        tokenOut = WETH;
    }
    const ethersProvider = getEthersProvider();
    let tokenInAmount = ethers.utils.parseUnits(tokenInValue, tokenIn.decimals);
    let tokenInObject = new Token(tokenIn.chainId, tokenIn.address, tokenIn.decimals, tokenIn.symbol, tokenIn.name);
    let tokenOutObject = new Token(tokenOut.chainId, tokenOut.address, tokenOut.decimals, tokenOut.symbol, tokenOut.name);

    let pairs = (arr) => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat();
    let baseTokens = TokenList.filter(function (t) {
        return ['DAI', 'USDC', 'USDT', 'COMP', 'WETH', 'MKR', 'LINK', tokenIn.symbol, tokenOut.symbol].includes(t.symbol)
    }).map((el) => {
        return new Token(el.chainId, el.address, el.decimals, el.symbol, el.name)
    });
    let listOfPairwiseTokens = pairs(baseTokens);
    const getPairs = async (list) => {
        let listOfPromises = list.map(item => Fetcher.fetchPairData(item[0], item[1], ethersProvider))
        return Promise.all(listOfPromises.map(p => p.catch(() => undefined)));
    }
    let listOfPairs = await getPairs(listOfPairwiseTokens);
    let bestTrades = Trade.bestTradeExactIn(
        listOfPairs.filter(e => e),   // 去掉undefined的
        new TokenAmount(tokenInObject, tokenInAmount),
        tokenOutObject,
        { maxHops: 3, maxNumResults: 1 }
    );
    // bestTrades类型是Trade[],返回最优的maxNumResults个Trade,一般我们取第一个就行了
    // trades[0].route.path 这个是路径上的每个Token组成的数组
    if (!bestTrades[0]) {
        return;
    }
    let trade = bestTrades[0];
    const price = trade.executionPrice.toSignificant(6);
    const priceInvert = trade.executionPrice.invert().toSignificant(6);
    const amountOut = trade.outputAmount.toSignificant(6);
    const slippageTolerancePercent = new Percent(Math.round(parseFloat(slippageTolerance) * 100), '10000'); // 50 bips, 1 bip(基点) = 0.01%
    const minimumReceived = trade.minimumAmountOut(slippageTolerancePercent).toSignificant(6);
    const path = trade.route.path.map(item => item.symbol);
    return {
        trade,
        price,
        priceInvert,
        amountOut,
        minimumReceived,
        path
    }
};


/**
 * 兑换代币
 * @param {Trade} trade
 * @param {object} tokenIn
 * @param {string} tokenInValue
 * @param {object} tokenOut
 * @param {string} slippageTolerance
 * @returns {any}
 */
const swapToken = async (trade, tokenIn, tokenInValue, tokenOut, slippageTolerance="0.5") => {
    console.log("swapToken");
    const ethersProvider = getEthersProvider();
    const signer = ethersProvider.getSigner();

    const toAddress = await signer.getAddress();
    console.log("chainId:",await signer.getChainId());
    const tokenInAmount = ethers.utils.parseUnits(tokenInValue, tokenIn.decimals);
    const slippageTolerancePercent = new Percent(Math.round(parseFloat(slippageTolerance) * 100), '10000');
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 最多等20分钟

    const amountOutMin = ethers.BigNumber.from(trade.minimumAmountOut(slippageTolerancePercent).raw.toString());
    const path = trade.route.path.map(item => item.address);

    console.log('path', path);
    console.log('amountOutMin', ethers.utils.formatUnits(amountOutMin, tokenOut.decimals));
    
    const uniswapRouter02 = new ethers.Contract(
        UNISWAP_ROUTER02_ADDRESS,
        uniswapRouter02ABI,
        signer
    );
    console.log("uniswapRouter02", uniswapRouter02);
    if(tokenIn.symbol === 'ETH') {
        const txResponse = await uniswapRouter02.swapExactETHForTokens(
            amountOutMin,
            path,
            toAddress,
            deadline,
            {value: tokenInAmount, gasPrice: await ethersProvider.getGasPrice()}
        );
        const receipt = await txResponse.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    } else if(tokenOut.symbol === 'ETH') {
        const txResponse = await uniswapRouter02.swapExactTokensForETH(
            tokenInAmount,
            amountOutMin,
            path,
            toAddress,
            deadline
        );
        const receipt = await txResponse.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    } else {
        const txResponse = await uniswapRouter02.swapExactTokensForTokens(
            tokenInAmount,
            amountOutMin,
            path,
            toAddress,
            deadline
        );
        const receipt = await txResponse.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    }
};

export {
    getBestTradeExactIn,
    swapToken
}