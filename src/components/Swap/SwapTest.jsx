import React from "react";

import {
    SwapToken,
    SwapTokenUseMetaMask,
    ApproveToken
} from "../../utils/SwapTester";

import tokenList from "../../utils/TokenList";

const SwapTest = () => {
    const test_SwapEthForOthers = async e => {
        e.preventDefault();
        const tokens = Object.keys(tokenList);
        for(let i=0;i<tokens.length;i++) {
            if(tokens[i] === 'ETH') {
                continue;
            }
            await SwapToken('ETH', '2', tokens[i]);
        }
        console.log("finished....");
    };

    // 换一些DAI、AAVE、LINK、UNI
    const test_SwapSomeETHForAAVE =  async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("ETH", "100.0", "AAVE");
    }

    const test_SwapSomeETHForLINK = async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("ETH", "100.0", "LINK");
    }

    const test_SwapSomeETHForUNI = async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("ETH", "100.0", "UNI");
    }

    const test_SwapSomeETHForCRV = async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("ETH", "100.0", "CRV");
    }

    const test_SwapSomeETHForDAI = async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("ETH", "10.0", "DAI");
    }

    const test_SwapSomeUNIForCRV = async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("UNI", "100.0", "CRV");
    }

    const test_SwapSomeDAIForUNI = async e => {
        e.preventDefault();
        //await ApproveToken("DAI", "500");
        //await ApproveToken("UNI", "500");
        await SwapTokenUseMetaMask("DAI", "100", "UNI");
    }

    const test_SwapSomeDAIForETH = async e => {
        e.preventDefault();
        await SwapTokenUseMetaMask("DAI", "100", "ETH");
    }

    const test_ApproveTokenUNI = async e => {
        e.preventDefault();
        await ApproveToken("UNI", "200");
    }

    const test_ApproveTokenCRV = async e => {
        e.preventDefault();
        await ApproveToken("CRV", "10");
    }

    const test_ApproveTokenAAVE = async e => {
        e.preventDefault();
        await ApproveToken("AAVE", "10");
    }

    const test_ApproveTokenDAI = async e => {
        e.preventDefault();
        await ApproveToken("DAI", "500");
    }

    return (
        <div>
            <p>------------ Swap测试 --------------</p>
            <button type="submit" onClick={test_SwapEthForOthers}>test_SwapEthForOthers</button>
            <button type="submit" onClick={test_SwapSomeETHForAAVE}>test_SwapSomeETHForAAVE</button>
            &nbsp;
            <button type="submit" onClick={test_SwapSomeETHForLINK}>test_SwapSomeETHForLINK</button>
            &nbsp;
            <button type="submit" onClick={test_SwapSomeETHForUNI}>test_SwapSomeETHForUNI</button>
            &nbsp;
            <button type="submit" onClick={test_SwapSomeETHForCRV}>test_SwapSomeETHForCRV</button>
            &nbsp;
            <button type="submit" onClick={test_SwapSomeETHForDAI}>test_SwapSomeETHForDAI</button>
            &nbsp;
            <button type="submit" onClick={test_SwapSomeDAIForUNI}>test_SwapSomeDAIForUNI</button>
            &nbsp;
            <button type="submit" onClick={test_SwapSomeDAIForETH}>test_SwapSomeDAIForETH</button>
            <p>------ Approve测试 -----</p>
            <button type="submit" onClick={test_ApproveTokenUNI}>test_ApproveTokenUNI</button>
            &nbsp;
            <button type="submit" onClick={test_ApproveTokenCRV}>test_ApproveTokenCRV</button>
            &nbsp;
            <button type="submit" onClick={test_ApproveTokenAAVE}>test_ApproveTokenAAVE</button>
            &nbsp;
            <button type="submit" onClick={test_ApproveTokenDAI}>test_ApproveTokenDAI</button>
        </div>
    );
};

export default SwapTest;