import {
    ChainId,
    Fetcher,
    Route,
    Trade,
    Token,
    TokenAmount,
    TradeType,
    Percent
} from '@uniswap/sdk';
import tokenList, { WETH } from '../constants/TokenList';

const ethers = require('ethers');
const ethersProvider = require('./EthersWrap').GetEthersProvider();

/**
 * @dev 获取精确输入token的最优交易路径
 * @param tokenIn 输入token
 * @param tokenInValue 输入token金额
 * @param tokenOut 输出token
 * @param slippage 滑点,比如0.5%就传0.5
 * @return Trade
 */
const GetBestTradeExactIn = async (tokenIn, tokenInValue, tokenOut, slippage = "0.5") => {
    if (!tokenIn || !tokenInValue || !tokenOut) {
        return;
    }
    if (tokenIn.symbol === 'ETH') {
        tokenIn = WETH;
    }
    if (tokenOut.symbol === 'ETH') {
        tokenOut = WETH;
    }
    let tokenInAmount = ethers.utils.parseUnits(tokenInValue, tokenIn.decimals);
    let tokenInObject = new Token(tokenIn.chainId, tokenIn.address, tokenIn.decimals, tokenIn.symbol, tokenIn.name);
    let tokenOutObject = new Token(tokenOut.chainId, tokenOut.address, tokenOut.decimals, tokenOut.symbol, tokenOut.name);

    let pairs = (arr) => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat();
    let baseTokens = tokenList.filter(function (t) {
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
    const priceImpact = trade.priceImpact.toFixed(2);
    const amountOut = trade.outputAmount.toSignificant(6);
    const slippageTolerance = new Percent(Math.round(parseFloat(slippage) * 100), '10000') // 50 bips, 1 bip(基点) = 0.01%
    const minimumAmountOut = trade.minimumAmountOut(slippageTolerance).toSignificant(6);
    const path = trade.route.path.map(item => item.symbol);

    console.log("priceImpact.toFixed(2)",trade.priceImpact.toFixed(2));
    const ONE_BIPS = new Percent('1', '10000');
    if (trade.priceImpact.lessThan(ONE_BIPS)) {
        console.log("priceImpact < 0.01%");
    }
    return {
        price,
        priceInvert,
        priceImpact,
        amountOut,
        minimumAmountOut,
        path
    }
};

export {
    GetBestTradeExactIn
}