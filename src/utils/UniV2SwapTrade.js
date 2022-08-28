import { Trade, Token, TokenAmount, Percent, Pair } from '@uniswap/sdk';
import { getEthersProvider } from "./EthersWrap";
import { WETH } from '../constants/TokenList';
import { UNISWAP_V2_NAME } from '../constants/DexName';
import UniswapV2PairABI from "../abis/IUniswapV2Pair.json";
import UniswapV2Router02ABI from "../abis/IUniswapV2Router02.json";
import { ethers } from "ethers";
import {
    UNISWAP_V2_ROUTER02_ADDRESS,
    UNISWAP_V2_FACTORY_ADDRESS,
    UNISWAP_V2_PAIR_BYTECODE_HASH
} from "../constants/Uniswap";
import { getCommonPairs, getPairAddress } from "./Pair";

class UniV2SwapTrade {
    constructor(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance) {
        this._tokenIn = tokenIn;
        this._tokenOut = tokenOut;
        if(tokenIn.symbol === 'ETH') {
            tokenIn = WETH;
        }
        this._tokenInAmount = ethers.utils.parseUnits(tokenInDisplayAmount, tokenIn.decimals);
        this._slippageTolerancePercent = new Percent(Math.round(parseFloat(slippageTolerance) * 100), '10000');
        this._trade = null;
    }

    async computeBestTrade() {
        let t = this._tokenIn.symbol === 'ETH' ? WETH : this._tokenIn;
        let tokenA = new Token(t.chainId, t.address, t.decimals, t.symbol, t.name);
        t = this._tokenOut.symbol === 'ETH' ? WETH : this._tokenOut;
        let tokenB = new Token(t.chainId, t.address, t.decimals, t.symbol, t.name);

        let allCommonPairs = getCommonPairs(tokenA, tokenB);
        const pairsData = await this._getPairsData(allCommonPairs);

        let bestTrades = Trade.bestTradeExactIn(
            pairsData,
            new TokenAmount(tokenA, this._tokenInAmount),
            tokenB,
            { maxHops: 3, maxNumResults: 1 }
        );
        if (!bestTrades[0]) {
            throw new Error('UniV2SwapTrade cannot find best trade');
        }
        this._trade = bestTrades[0];
    }

    async executeTrade() {
        const ethersProvider = getEthersProvider();
        const signer = ethersProvider.getSigner();
        const toAddress = await signer.getAddress();
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 最多等20分钟

        let trade = this._trade;
        const amountOutMin = ethers.BigNumber.from(trade.minimumAmountOut(this._slippageTolerancePercent).raw.toString());
        const path = trade.route.path.map(item => item.address);
        const uniswapRouter02 = new ethers.Contract(
            UNISWAP_V2_ROUTER02_ADDRESS,
            UniswapV2Router02ABI,
            signer
        );
        if (this._tokenIn.symbol === 'ETH') {
            const txResponse = await uniswapRouter02.swapExactETHForTokens(
                amountOutMin,
                path,
                toAddress,
                deadline,
                { value: this._tokenInAmount, gasPrice: await ethersProvider.getGasPrice() }
            );
            const receipt = await txResponse.wait();
            console.log(`Transaction was mined in block ${receipt.blockNumber}`);
        } else if (this._tokenOut.symbol === 'ETH') {
            const txResponse = await uniswapRouter02.swapExactTokensForETH(
                this._tokenInAmount,
                amountOutMin,
                path,
                toAddress,
                deadline
            );
            const receipt = await txResponse.wait();
            console.log(`Transaction was mined in block ${receipt.blockNumber}`);
        } else {
            const txResponse = await uniswapRouter02.swapExactTokensForTokens(
                this._tokenInAmount,
                amountOutMin,
                path,
                toAddress,
                deadline
            );
            const receipt = await txResponse.wait();
            console.log(`Transaction was mined in block ${receipt.blockNumber}`);
        }
    }

    get dexName() {
        return UNISWAP_V2_NAME;
    }

    get price() {
        return this._trade?.executionPrice.toSignificant(6) ?? "";
    }
    get priceInvert() {
        return this._trade?.executionPrice.invert().toSignificant(6) ?? "";
    }
    get amountOut() {
        return this._trade?.outputAmount.toSignificant(6) ?? "";
    }
    get minimumReceived() {
        return this._trade?.minimumAmountOut(this._slippageTolerancePercent).toSignificant(6) ?? "";
    }
    get path() {
        return this._trade?.route.path.map(item => item.symbol) ?? [];
    }

    async _getPairsData(pairs) {
        const ethersProvider = getEthersProvider();
        const fetchPairData = async (tokenA, tokenB) => {
            let pair;
            try {
                const pairAddress = getPairAddress(UNISWAP_V2_FACTORY_ADDRESS, tokenA, tokenB, UNISWAP_V2_PAIR_BYTECODE_HASH);
                const uniV2PairContract = new ethers.Contract(pairAddress, UniswapV2PairABI, ethersProvider);
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

        let pairsPromise = pairs.map(item => fetchPairData(item[0], item[1]).catch(() => undefined));
        return (await Promise.all(pairsPromise)).filter(e => e);
    }
}

export default UniV2SwapTrade;