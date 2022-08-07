import React, { useState, useRef } from "react";
import "./Swap.css";

import SwapTest from "./SwapTest";


const Swap = () => {
    const token0Symbol = useRef();
    const token0Input = useRef();
    const token1Symbol = useRef();
    const token1Input = useRef();

    const clickApprove = e => {
        e.preventDefault();
        console.log("You clicked Approve");
    }
    const clickSwap = async (e) => {
        e.preventDefault();
        console.log("You clicked Swap");
    }
    return (
        <div className="swap-container">
            <form>
                <div>from:</div>
                <div>
                    <input type="text" ref={token0Input} placeholder="0.0" />
                    <select ref={token0Symbol}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select>
                </div>
                <div>to:</div>
                <div>
                    <input type="text" ref={token1Input} placeholder="0.0" />
                    <select ref={token1Symbol}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select>
                </div>
                <div>
                    Price: 1 ETH = 1651 DAI
                </div>
                <div>
                    <button type="submit" onClick={clickApprove}>Approve</button>
                    <span>&nbsp;</span>
                    <button type="submit" onClick={clickSwap}>Swap</button>
                </div>
                <div>
                    Minimum Received: 0.241891 DAI
                </div>
                <div>
                    {"Price Impace: -0.01%"}
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