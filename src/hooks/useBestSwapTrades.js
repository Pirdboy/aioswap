import { useState, useEffect } from "react";
import UniV2SwapTrade from "../utils/UniV2SwapTrade";
import SushiSwapTrade from "../utils/SushiSwapTrade";
function useBestSwapTrades(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance, tradesUpdateCallback) {
    const [bestTrades, setBestTrades] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("useBestSwapTrades useEffect");
        if(tokenIn.address === tokenOut.address || !tokenInDisplayAmount || parseFloat(tokenInDisplayAmount) === 0) {
            setError(null);
            setLoading(false);
            setBestTrades(null);
            return;
        }
        const getBestTrades = async () => {
            try {
                setError(null);
                setLoading(true);
                let trades = [
                    new UniV2SwapTrade(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance),
                    new SushiSwapTrade(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance)
                ];
                await Promise.all(trades.map(e => e.computeBestTrade()));
                console.log("getBestTrades");
                trades.sort((e1, e2) => {
                    let amount1 = parseFloat(e1.amountOut);
                    let amount2 = parseFloat(e2.amountOut);
                    if(amount1 > amount2) {
                        return -1;
                    } else if(amount1 === amount2) {
                        return 0;
                    } else {
                        return 1;
                    }
                })
                setLoading(false);
                setBestTrades(trades);
                tradesUpdateCallback();
            } catch (error) {
                console.log("error",error);
                setError(error);
                setLoading(false);
                setBestTrades(null);
            }
        };
        getBestTrades();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance]);
    return {bestTrades, loading, error};
}

export default useBestSwapTrades;