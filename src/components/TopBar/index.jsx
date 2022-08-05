import { ethers } from "ethers";
import React, { useEffect } from "react";
import './TopBar.css';
import { useAccountContext } from "../../contexts/Account";

const ChainIdName = {
    '0x1':'Mainnet',
    '0x3':'Ropsten',
    '0x4':'Rinkeby',
    '0x0':'none'
};

const TopBar = () => {
    const {account, updateAccount} = useAccountContext();

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
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        updateAccount(accounts[0], chainId);
    };

    useEffect(() => {
        checkWalletConnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleConnectWallet = async(e) => {
        e.preventDefault();
        const { ethereum } = window;
        if (!ethereum) {
            console.log("MetaMask not detected");
            return;
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const chainId = await ethereum.request({ method: 'eth_chainId' });
            updateAccount(accounts[0], chainId);
        } catch(err) {
            console.log('Error connect metamask',err);
        }
    }
    return (
        <div className="wallet-container">
            <button type="submit" onClick={handleConnectWallet}>connect wallet</button>
            <span>&nbsp;</span>
            <span>wallet {account.address ? `connected:${account.address}` : `not connected`}</span>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;</span>
            <span>network: {ChainIdName[account.chainId]}</span>
        </div>
    )
};

export default TopBar;