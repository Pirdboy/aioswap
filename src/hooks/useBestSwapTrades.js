import { useState, useEffect } from "react";
import UniV2SwapTrade from "../utils/UniV2SwapTrade";
import SushiSwapTrade from "../utils/SushiSwapTrade";

function useBestSwapTrades(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance) {
    const [bestTrades, setBestTrades] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if(!tokenInDisplayAmount || parseFloat(tokenInDisplayAmount) === 0) {
            setLoading(false);
            setBestTrades([]);
            setError(null);
            return;
        }
        const getBestTrades = async () => {
            try {
                setLoading(true);
                setError(null);
                let trades = [
                    new UniV2SwapTrade(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance),
                    new SushiSwapTrade(tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance)
                ];
                await Promise.all(trades.map(e => e.computeBestTrade()))
                setLoading(false);
                setBestTrades(trades);
            } catch (error) {
                setError(error);
                setLoading(false);
                setBestTrades([]);
            }
        };
        getBestTrades();

    }, [tokenIn, tokenInDisplayAmount, tokenOut, slippageTolerance]);
    return {bestTrades, loading, error};
}

export default useBestSwapTrades;