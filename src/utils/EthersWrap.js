import TokenBalance from './TokenBalance';
import ERC20ABI from '../abis/ERC20';

const ethers = require('ethers');
const metaMaskProvider = new ethers.providers.Web3Provider(window.ethereum);

const ChainIdList = {
    0: 'none',
    1: 'Mainnet',
    31337: 'hardhat',
};
const UNISWAP_ROUTER02_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

const getChainName = chainId => {
    return ChainIdList[chainId];
}

const isMetaMaskInstall = () => {
    return window.ethereum !== undefined;
}

const checkIfConnectMetaMask = async () => {
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

const connectMetaMask = async () => {
    const accounts = await metaMaskProvider.send("eth_requestAccounts", []);
    const chainId = (await metaMaskProvider.getNetwork()).chainId;
    return {
        address: accounts[0],
        chainId
    };
};

const getEthersProvider = () => metaMaskProvider;

const getEthersSigner = () => metaMaskProvider.getSigner();

const getChainId = async () => {
    return (await metaMaskProvider.getNetwork()).chainId;
};

/**
 * 获取ETH余额
 * @param {string} accountAddress 账户地址
 * @returns {Promise<TokenBalance>} 账户余额
 */
const getBalance = async (accountAddress) => {
    if (!accountAddress) {
        throw new Error('getBalance address undefined');
    }
    const balance = await metaMaskProvider.getBalance(accountAddress);
    return TokenBalance.fromRawAmount(balance, 'ether');
}

/**
 * 获取ERC20代币余额
 * @param {address} accountAddress 账户地址
 * @param {object} tokenInfo 代币信息
 * @returns {Promise<TokenBalance>} 代币余额
 */
const getERC20Balance = async (accountAddress, tokenInfo) => {
    if (!accountAddress) {
        throw new Error('getERC20Balance accountAddress undefined');
    }
    if (!tokenInfo.address) {
        throw new Error('getERC20Balance tokenInfo.address undefined');
    }

    const contract = new ethers.Contract(tokenInfo.address, ERC20ABI, metaMaskProvider);
    const balance = await contract.balanceOf(accountAddress);
    return TokenBalance.fromRawAmount(balance, tokenInfo.decimals);
};

/**
 * 获取代币对Router合约的批准额度
 * @param {string} ownerAddress 代币拥有者地址
 * @param {object} tokenInfo 代币信息
 * @returns {Promise<TokenBalance>} 批准额度
 */
const getERC20AllowanceOfRouter = async (ownerAddress, tokenInfo) => {
    if (!ownerAddress) {
        throw new Error('getERC20AllowanceOfRouter accountAddress undefined');
    }
    if (!tokenInfo.address) {
        throw new Error('getERC20AllowanceOfRouter tokenInfo.address undefined');
    }
    const contract = new ethers.Contract(tokenInfo.address, ERC20ABI, metaMaskProvider);
    const allowance = await contract.allowance(ownerAddress, UNISWAP_ROUTER02_ADDRESS);
    return TokenBalance.fromRawAmount(allowance, tokenInfo.decimals);
};

/**
 * ERC20代币批准Router合约
 * @param {object} tokenInfo 代币信息
 * @param {string} displayAmount 代币金额(显示)
 * @returns {any}
 */
const approveRouter = async (tokenInfo, displayAmount) => {
    if (!tokenInfo?.address) {
        throw new Error('approveRouter tokenInfo.address undefined');
    }
    if(!displayAmount) {
        throw new Error('approveRouter displayAmount invalid',displayAmount);
    }
    const signer = metaMaskProvider.getSigner();
    const contract = new ethers.Contract(tokenInfo.address, ERC20ABI, signer);
    let txResponse = await contract.approve(
        UNISWAP_ROUTER02_ADDRESS,
        ethers.utils.parseUnits(displayAmount, tokenInfo.decimals),
    )
    await txResponse.wait();
};

export {
    checkIfConnectMetaMask,
    connectMetaMask,
    approveRouter,
    getBalance,
    getERC20Balance,
    getERC20AllowanceOfRouter,
    getEthersProvider,
    getEthersSigner,
    getChainId,
    getChainName,
    isMetaMaskInstall,
};