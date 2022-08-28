import { ethers } from 'ethers';
import WETHABI from '../abis/WETH-readable';
import { WETH } from '../constants/TokenList';
import { getEthersProvider } from './EthersWrap';

class WrappedTokenSwapTrade {
    constructor(tokenIn, tokenInDisplayAmount, tokenOut) {
        this._tokenIn = tokenIn;
        this._tokenOut = tokenOut;
        this._tokenInDisplayAmount = tokenInDisplayAmount;
        this._tokenInAmount = ethers.utils.parseUnits(tokenInDisplayAmount, tokenIn.decimals);
    }

    // 只考虑WETH合约
    async executeTrade() {
        const ethersProvider = getEthersProvider();
        const signer = ethersProvider.getSigner();
        let wethContract = new ethers.Contract(WETH.address, WETHABI, signer);
        let txResponse;
        if (this._tokenIn.symbol === 'ETH') {
            // ETH -> WETH
            txResponse = await wethContract.deposit({
                value: this._tokenInAmount
            })
        } else {
            // WETH -> ETH
            txResponse = await wethContract.withdraw(this._tokenInAmount)
        }
        const receipt = await txResponse.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    }

    get amountOut() {
        return this._tokenInDisplayAmount;
    }
}

export default WrappedTokenSwapTrade;