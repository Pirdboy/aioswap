import React from "react";
import Swap from "../swap";
import './layout.css';

const MainLayout = () => {
    return (
        <>
            <div className="header">
                header
            </div>
            <div className="content">
                <Swap />
            </div>
        </>
    )
};

export default MainLayout;