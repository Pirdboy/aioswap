import { Token } from '@uniswap/sdk';
import { TokenList } from '../constants/TokenList';
import {ethers} from 'ethers';

/**
 * 计算Pair合约地址
 * @param {string} factoryAdress
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @param {string} codeHash
 * @returns {string}
 */
const getPairAddress = (factoryAdress, tokenA, tokenB, codeHash) => {
    const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
    return ethers.utils.getCreate2Address(
        factoryAdress,
        ethers.utils.solidityKeccak256(['bytes'], [ethers.utils.solidityPack(['address', 'address'], [token0.address, token1.address])]),
        codeHash
    );
};

/**
 * 获取常见的Pair,用于计算交易路径
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @returns {[[Token,Token]]}
 */
const getCommonPairs = (tokenA, tokenB) => {
    let pairs = (arr) => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat();
    let baseTokens = TokenList.filter(function (t) {
        return ['SUSHI', 'DAI', 'USDC', 'USDT', 'COMP', 'WETH', 'MKR', 'LINK', tokenA.symbol, tokenB.symbol].includes(t.symbol)
    }).map(e => {
        return new Token(e.chainId, e.address, e.decimals, e.symbol, e.name)
    });
    return pairs(baseTokens);
}


export {
    getPairAddress,
    getCommonPairs
}