import React from "react";
import './TopBar.css';

const TopBar = () => {
    let address = "not connected"
    return (
        <div className="wallet-container">
            <button type="submit">connect wallet</button>
            <span>&nbsp;</span>
            <span>wallet address: {address}</span>
        </div>
    )
};

export default TopBar;