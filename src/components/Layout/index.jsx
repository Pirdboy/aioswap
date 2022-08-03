import React from "react";
import Swap from "../Swap";
import TopBar from "../TopBar";

import './Layout.css';


const MainLayout = () => {
    return (
        <>
            <div className="header">
                <TopBar />
            </div>
            <div className="content">
                <Swap />
            </div>
        </>
    )
};

export default MainLayout;