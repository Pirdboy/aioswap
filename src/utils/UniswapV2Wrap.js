import {
    Fetcher,
    Trade,
    Token,
    TokenAmount,
    Percent,
    Pair,
} from '@uniswap/sdk';
import {TokenList, WETH } from '../constants/TokenList';
import uniswapRouter02ABI from "../abis/uniswapRouter02ABI.json";
import uniswapV2Pair from "../abis/IUniswapV2Pair.json";
import { getEthersProvider } from "./EthersWrap";
// import { getCreate2Address, solidityKeccak256, solidityPack } from 'ethers/lib/utils';

const ethers = require('ethers');
const UNISWAPV2_ROUTER02_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const UNISWAPV2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
const UNISWAPV2_PAIR_BYTECODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f';

const SUSHISWAP_ROUTER_ADDRESS = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F';
const SUSHISWAP_FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac';
const SUSHISWAP_PAIR_BYTECODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303';


// const from = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
// const salt = "0x7c5ea36004851c764c44143b1dcb59679b11c9a68e5f41497f6cf3d480715331";
// const initCode = "0x6394198df16000526103ff60206004601c335afa6040516060f3";
// const initCodeHash = keccak256(initCode);

// getCreate2Address(from, salt, initCodeHash);
// salt计算
// 合约端 keccak256(abi.encodePacked(token0, token1)); // 排序后的token0Address,token1Address
// js端 keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
// abi.encodePacked  ethers.js最新版的代码 -> ethers.utils.solidityPack

/**
 * 计算Pair合约地址
 * @param {string} factoryAdress
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @returns {string}
 */
const getPairAddress = (factoryAdress, tokenA, tokenB, codeHash) => {
    const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
    return ethers.utils.getCreate2Address(
        factoryAdress,
        ethers.utils.solidityKeccak256(['bytes'], [ethers.utils.solidityPack(['address', 'address'], [token0.address, token1.address])]),
        codeHash
    );
};

/**
 * 计算UniswapV2 Pair合约地址
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @returns {string}
 */
const getUniswapV2PairAddress = (tokenA, tokenB) => {
    return getPairAddress(UNISWAPV2_FACTORY_ADDRESS, tokenA, tokenB, UNISWAPV2_PAIR_BYTECODE_HASH);
}

/**
 * 计算Sushiswap Pair合约地址
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @returns {string}
 */
const getSushiswapPairAddress = (tokenA, tokenB) => {
    return getPairAddress(SUSHISWAP_FACTORY_ADDRESS, tokenA, tokenB, SUSHISWAP_PAIR_BYTECODE_HASH);
}

/**
 * @dev 获取精确输入token的最优交易路径
 * @param {object} tokenIn 输入token
 * @param {string} tokenInValue 输入token金额
 * @param {object} tokenOut 输出token
 * @param {string} slippageTolerance 滑点容忍度,比如0.5%就传0.5
 * @return {Trade}
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

    {
        // 测试Pair合约地址
        const uniAddr = getUniswapV2PairAddress(tokenInObject, tokenOutObject);
        const sushiAddr = getSushiswapPairAddress(tokenInObject, tokenOutObject);
        console.log(`Uniswap Pair (${tokenInObject.symbol}-${tokenOutObject.symbol}) ${uniAddr}`);
        console.log(`Sushiswap Pair (${tokenInObject.symbol}-${tokenOutObject.symbol}) ${sushiAddr}`);
    }

    const FetchPairData = async (tokenA, tokenB, aProvider) => {
        let pair;
        try {
            const pairAddress = getSushiswapPairAddress(tokenA, tokenB); 
            const uniV2PairContract = new ethers.Contract(pairAddress, uniswapV2Pair.abi, aProvider);
            const reserves = await uniV2PairContract.getReserves();
            const token0Address = await uniV2PairContract.token0();
            const token1Address = await uniV2PairContract.token1();
            const token0 = [tokenA, tokenB].find(token => token.address === token0Address);
            const token1 = [tokenA, tokenB].find(token => token.address === token1Address);
            pair = new Pair(
                new TokenAmount(token0, reserves.reserve0.toString()), 
                new TokenAmount(token1, reserves.reserve1.toString())
            )
            return pair;
        } catch (error) {
            return null;
        }
    };

    let pairs = (arr) => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat();
    let baseTokens = TokenList.filter(function (t) {
        return ['SUSHI','DAI', 'USDC', 'USDT', 'COMP', 'WETH', 'MKR', 'LINK', tokenIn.symbol, tokenOut.symbol].includes(t.symbol)
    }).map((el) => {
        return new Token(el.chainId, el.address, el.decimals, el.symbol, el.name)
    });

    let listOfPairwiseTokens = pairs(baseTokens);
    console.log("listOfPairwiseTokens", listOfPairwiseTokens);
    const getPairs = async (list) => {
        let listOfPromises = list.map(item => FetchPairData(item[0], item[1], ethersProvider) /*Fetcher.fetchPairData(item[0], item[1], ethersProvider)*/ )
        return Promise.all(listOfPromises.map(p => p.catch(() => undefined)));
    }
    let listOfPairs = await getPairs(listOfPairwiseTokens);
    const found = listOfPairs.find(e => e?.liquidityToken.address === '0x239650663A422273C0b2c7A1f1a8bdAb69E78D1B');
    console.log("found", found);

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
    console.log('bestTrades', bestTrades);
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
        UNISWAPV2_ROUTER02_ADDRESS,
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