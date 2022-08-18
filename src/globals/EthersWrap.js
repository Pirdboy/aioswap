const ethers = require('ethers');
const metaMaskProvider = new ethers.providers.Web3Provider(window.ethereum);
const ERC20ABI = require('../abis/ERC20');

let isConnected = false;

const ChainIdList = {
    0: 'none',
    1: 'Mainnet',
    31337: 'hardhat',
};

const GetChainName = chainId => {
    return ChainIdList[chainId];
}

const IsMetaMaskInstall = () => {
    return window.ethereum !== undefined;
}

const CheckIfConnectMetaMask = async () => {
    const { ethereum } = window;
    if (!ethereum) {
        isConnected = false;
        throw new Error('MetaMask is not installed')
    }
    const accounts = await metaMaskProvider.send('eth_accounts',[]);
    if(accounts.length === 0) {
        isConnected = false;
        throw new Error('No authorized account found')
    }
    const chainId = (await metaMaskProvider.getNetwork()).chainId;
    console.log('chainId',chainId);
    console.log('accounts',accounts);
    isConnected = true;
    return {
        address: accounts[0],
        chainId
    }
};

const ConnectMetaMask = async () => {
    const accounts = await metaMaskProvider.send("eth_requestAccounts",[]);
    const chainId = (await metaMaskProvider.getNetwork()).chainId;
    isConnected = true;
    return {
        address: accounts[0],
        chainId
    };
};

const Disconnect = () => {
    isConnected = false;
}

const IsConnected = () => isConnected;

const GetEthersProvider = () => metaMaskProvider;

const GetChainId = async () => {
    return (await metaMaskProvider.getNetwork()).chainId;
};

const GetBalance = async (address) => {
    if(!address) {
        throw new Error('GetBalance address undefined');
    }
    return await metaMaskProvider.getBalance(address); 
}

const GetERC20Balance = async (accountAddress, tokenAddress) => {
    if(!accountAddress) {
        throw new Error('GetERC20Balance accountAddress undefined');
    }
    if(!tokenAddress) {
        throw new Error('GetERC20Balance tokenAddress undefined');
    }

    const contract = new ethers.Contract(tokenAddress, ERC20ABI, metaMaskProvider);
    const balance = await contract.balanceOf(accountAddress);
    return balance;
};

const BalanceToString = (balance, formatUnits) => {
    return ethers.utils.formatUnits(balance, formatUnits);
}

export {
    CheckIfConnectMetaMask,
    ConnectMetaMask,
    Disconnect,
    GetBalance,
    GetERC20Balance,
    BalanceToString,
    GetEthersProvider,
    GetChainId,
    GetChainName,
    IsMetaMaskInstall,
    IsConnected
};