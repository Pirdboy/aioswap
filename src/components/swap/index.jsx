import React, {useState} from "react";
import "./Swap.css";

const Swap = () => {
    const [token0, setToken0] = useState("DAI");
    const [token1, setToken1] = useState("ETH");
    const handleToken0Change = event => {
        console.log("handleToken0Change",event.target.value);
        setToken0(event.target.value);
    };
    const handleToken1Change = event => {
        console.log("handleToken1Change",event.target.value);
        setToken1(event.target.value);
    };
    const clickApprove = e => {
        e.preventDefault();
        console.log("You clicked Approve");
    }
    const clickSwap = e => {
        e.preventDefault();
        console.log("You clicked Swap");
    }
    return (
        <div className="swap-container">
            <form>
                <div>from:</div>
                <div>
                    <input type="text" name="from" placeholder="0.0" />
                    <select value={token0} onChange={handleToken0Change}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select> 
                </div>
                <div>to:</div>
                <div>
                    <input type="text" name="to" placeholder="0.0" />
                    <select value={token1} onChange={handleToken1Change}>
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
                    {`Router: DAI -> WETH`}
                </div>
            </form>
        </div>
    )
}

export default Swap;