import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import './TopBar.css';

const ChainIdName = {
    '0x1':'Mainnet',
    '0x3':'Ropsten',
    '0x4':'Rinkeby',
    '0x0':'none'
};

const TopBar = () => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [chainId, setChainId] = useState('0x0');
    const checkWalletConnect = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log("MetaMask not detected");
            return;
        }
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if(accounts.length === 0) {
            console.log('No authorized account found');
            return;
        }
        console.log('Found authorized Account: ', accounts[0]);
        setCurrentAccount(accounts[0]);
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        setChainId(chainId);
    };

    useEffect(() => {
        checkWalletConnect();
    }, [])

    const handleConnectWallet = async(e) => {
        e.preventDefault();
        const { ethereum } = window;
        if (!ethereum) {
            console.log("MetaMask not detected");
            return;
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0]);
            const chainId = await ethereum.request({ method: 'eth_chainId' });
            setChainId(chainId);
        } catch(err) {
            console.log('Error connect metamask',err);
        }
    }
    return (
        <div className="wallet-container">
            <button type="submit" onClick={handleConnectWallet}>connect wallet</button>
            <span>&nbsp;</span>
            <span>wallet {currentAccount ? `connected:${currentAccount}` : `not connected`}</span>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;</span>
            <span>network: {ChainIdName[chainId]}</span>
        </div>
    )
};

export default TopBar;