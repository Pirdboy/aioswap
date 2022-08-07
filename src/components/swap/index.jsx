import React, { useState } from "react";
import "./Swap.css";

import SwapTest from "./SwapTest";
import { estimateTrade } from "../../utils/SwapTester";

const Swap = () => {
    const [token0Symbol, setToken0Symbol] = useState('ETH');
    const [token0Input, setToken0Input] = useState('0.0');
    const [token1Symbol, setToken1Symbol] = useState('DAI');
    const [token1Input, setToken1Input] = useState('0.0');
    const [price, setPrice] = useState('');
    const [priceInvert, setPriceInvert] = useState('');
    const [minimumReceived, setMinimumReceived] = useState('');
    const [estimatedOut, setEstimatedOut] = useState('');
    const [priceImpact, setPriceImpact] = useState('');
    

    const clickApprove = e => {
        e.preventDefault();
        console.log("You clicked Approve");
    }
    const clickSwap = async (e) => {
        e.preventDefault();
        console.log("You clicked Swap");
    }

    const setEstimateResult = (price, priceInvert, amountOut, minimumAmountOut, priceImpact) => {
        setPrice(price);
        setPriceInvert(priceInvert);
        setEstimatedOut(amountOut);
        setToken1Input(amountOut);
        setMinimumReceived(minimumAmountOut);
        setPriceImpact(priceImpact);
    };

    const clearEstimateResult = () => {
        setEstimateResult('','','','','');
    };
    const handleToken0InputChange = async e => {
        const amount = e.target.value;
        if(amount.length < 16 && (!amount || amount.match(/^[0-9]+\.?[0-9]*$/))){
            clearEstimateResult();
            setToken0Input(amount); // 在这里设置完之后,token0Input的值还是上次的,不能直接用
            if(amount.length > 0) {
                const {
                    price, 
                    priceInvert,
                    priceImpact,
                    minimumAmountOut,
                    amountOut
                } = await estimateTrade(token0Symbol, amount, token1Symbol);
                setEstimateResult(price, priceInvert, amountOut, minimumAmountOut, priceImpact);
            }
        }
    };

    const handleToken0SymbolChange = async e => {
        setToken0Symbol(e.target.value);
    };

    const handleToken1InputChange = e => {
        const amount = e.target.value;
        if(amount.length < 16 && (!amount || amount.match(/^[0-9]+\.?[0-9]*$/))){
            setToken1Input(e.target.value);
        }
        
    };

    const handleToken1SymbolChange = async e => {
        setToken1Symbol(e.target.value);
    };
    
    return (
        <div className="swap-container">
            <form>
                <div>From:</div>
                <div>
                    <input type="text" value={token0Input} placeholder="0.0" onChange={handleToken0InputChange} />
                    <select value={token0Symbol} onChange={handleToken0SymbolChange}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select>
                </div>
                <div>To:{estimatedOut ? '(estimated)':''}</div>
                <div>
                    <input type="text" value={token1Input} placeholder="0.0" onChange={handleToken1InputChange} />
                    <select value={token1Symbol} onChange={handleToken1SymbolChange}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select>
                </div>
                <div>
                    Price: {price ? `1 ${token0Symbol} = ${price} ${token1Symbol}`:''}
                    {` | `}
                    {priceInvert ? `1 ${token1Symbol} = ${priceInvert} ${token0Symbol}` : ''}
                </div>
                <div>
                    <button type="submit" onClick={clickApprove}>Approve</button>
                    <span>&nbsp;</span>
                    <button type="submit" onClick={clickSwap}>Swap</button>
                </div>
                <div>
                    Minimum Received: {minimumReceived ? `${minimumReceived} ${token1Symbol}` : ''}
                </div>
                <div>
                    Price Impact: {priceImpact ? `${priceImpact}%`:''}
                </div>
                <div>
                    {`Router: DAI -> WETH`}
                </div>
                <SwapTest />
            </form>
        </div>
    )
}

export default Swap;