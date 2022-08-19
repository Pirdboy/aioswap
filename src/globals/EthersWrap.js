const ethers = require('ethers');
const Decimal = require('decimal.js-light');
const metaMaskProvider = new ethers.providers.Web3Provider(window.ethereum);
const { ERC20ABI } = require('../abis/ERC20');

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
        throw new Error('MetaMask is not installed')
    }
    const accounts = await metaMaskProvider.send('eth_accounts', []);
    if (accounts.length === 0) {
        throw new Error('No authorized account found')
    }
    const chainId = (await metaMaskProvider.getNetwork()).chainId;
    console.log('chainId', chainId);
    console.log('accounts', accounts);
    return {
        address: accounts[0],
        chainId
    }
};

const ConnectMetaMask = async () => {
    const accounts = await metaMaskProvider.send("eth_requestAccounts", []);
    const chainId = (await metaMaskProvider.getNetwork()).chainId;
    return {
        address: accounts[0],
        chainId
    };
};

const GetEthersProvider = () => metaMaskProvider;

const GetChainId = async () => {
    return (await metaMaskProvider.getNetwork()).chainId;
};

const GetBalance = async (address) => {
    if (!address) {
        throw new Error('GetBalance address undefined');
    }
    return await metaMaskProvider.getBalance(address);
}

const GetERC20Balance = async (accountAddress, tokenAddress) => {
    if (!accountAddress) {
        throw new Error('GetERC20Balance accountAddress undefined');
    }
    if (!tokenAddress) {
        throw new Error('GetERC20Balance tokenAddress undefined');
    }

    const contract = new ethers.Contract(tokenAddress, ERC20ABI, metaMaskProvider);
    const balance = await contract.balanceOf(accountAddress);
    console.log("balance",balance);
    console.log("balance string",balance.toString());
    return balance;
};

const BalanceToString = (balance, unitsOrDecimals, significant=6) => {
    let s = ethers.utils.formatUnits(balance, unitsOrDecimals);
    let d = new Decimal(s);
    return d.toSignificantDigits(significant, 1); // 第二个参数是ROUND_DOWN
}

export {
    CheckIfConnectMetaMask,
    ConnectMetaMask,
    GetBalance,
    GetERC20Balance,
    BalanceToString,
    GetEthersProvider,
    GetChainId,
    GetChainName,
    IsMetaMaskInstall,
};