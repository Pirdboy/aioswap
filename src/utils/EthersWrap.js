import TokenBalance from './TokenBalance';
import ERC20ABI from '../abis/ERC20-readable';
import {ethers} from 'ethers';

const metaMaskProvider = new ethers.providers.Web3Provider(window.ethereum, 'any');

const ChainIdList = {
    0: 'none',
    1: 'Mainnet',
    31337: 'hardhat',
};

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

const getChainId = async () => {
    return (await metaMaskProvider.getNetwork()).chainId;
};

/**
 * 获取ETH余额
 * @param {string} account 账户地址
 * @returns {Promise<TokenBalance>} 账户余额
 */
const getBalance = async (account) => {
    if (!account) {
        throw new Error('getBalance address undefined');
    }
    const balance = await metaMaskProvider.getBalance(account);
    return TokenBalance.fromRawAmount(balance, 'ether');
}

/**
 * 获取ERC20代币余额
 * @param {address} account 账户地址
 * @param {object} token 代币信息
 * @returns {Promise<TokenBalance>} 代币余额
 */
const getERC20Balance = async (account, token) => {
    if (!account) {
        throw new Error('getERC20Balance accountAddress undefined');
    }
    if (!token.address) {
        throw new Error('getERC20Balance tokenInfo.address undefined');
    }

    const contract = new ethers.Contract(token.address, ERC20ABI, metaMaskProvider);
    const balance = await contract.balanceOf(account);
    return TokenBalance.fromRawAmount(balance, token.decimals);
};

/**
 * 获取erc20代币Router合约的批准额度
 * @param {string} account 代币拥有者地址
 * @param {object} token 代币信息
 * @param {string} spender 被批准人地址
 * @returns {Promise<TokenBalance>} 批准额度
 */
const getERC20Allowance = async (account, token, spender) => {
    if (!account) {
        throw new Error('getERC20AllowanceOfRouter accountAddress undefined');
    }
    if (!token.address) {
        throw new Error('getERC20AllowanceOfRouter token.address undefined');
    }
    const contract = new ethers.Contract(token.address, ERC20ABI, metaMaskProvider);
    const allowance = await contract.allowance(account, spender);
    return TokenBalance.fromRawAmount(allowance, token.decimals);
};

/**
 * ERC20代币批准Router合约
 * @param {object} token 代币信息
 * @param {string} displayAmount 代币金额(显示)
 * @param {string} spender 被批准人地址
 * @returns {any}
 */
const approveERC20 = async (token, displayAmount, spender) => {
    if (!token?.address) {
        throw new Error('approveRouter token.address undefined');
    }
    if(!displayAmount) {
        throw new Error('approveRouter displayAmount invalid',displayAmount);
    }
    const signer = metaMaskProvider.getSigner();
    const contract = new ethers.Contract(token.address, ERC20ABI, signer);
    let txResponse = await contract.approve(
        spender,
        ethers.utils.parseUnits(displayAmount, token.decimals),
    )
    let receipt = await txResponse.wait();
    console.log(`approveRouter Transaction was mined in block ${receipt.blockNumber}`);
};


export {
    checkIfConnectMetaMask,
    connectMetaMask,
    approveERC20,
    getBalance,
    getERC20Balance,
    getERC20Allowance,
    getEthersProvider,
    getChainId,
    getChainName,
    isMetaMaskInstall,
};