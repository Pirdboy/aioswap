import React, { useState, useRef } from "react";
import "./Swap.css";
import {
    ChainId,
    Fetcher,
    WETH,
    Route,
    Trade,
    TokenAmount,
    TradeType,
    Percent
} from '@uniswap/sdk';
import { ethers } from "ethers";


const chainId = ChainId.MAINNET;
const daiTokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const uniswapRouter02Address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const decimals = 1000000000000000000;

const Swap = () => {
    const token0Symbol = useRef();
    const token0Input = useRef();
    const token1Symbol = useRef();
    const token1Input = useRef();

    const clickApprove = e => {
        e.preventDefault();
        console.log("You clicked Approve");
    }
    const clickSwap = async (e) => {
        e.preventDefault();
        console.log("You clicked Swap");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();
        console.log("signer address", signerAddress);
        console.log("signer balance", await signer.getBalance());
        let ethInput = ethers.BigNumber.from((parseFloat(token0Input.current.value)*decimals).toString());
        // let ethInput = ethers.utils.parseUnits(token0Input.current.value, 'ether');
        console.log("ethInput", ethInput);
        const dai = await Fetcher.fetchTokenData(chainId, daiTokenAddress, provider);
        const weth = WETH[chainId];
        const pair = await Fetcher.fetchPairData(dai, weth, provider);
        const route = new Route([pair], weth);
        const trade = new Trade(route, new TokenAmount(weth, ethInput), TradeType.EXACT_INPUT);
        console.log('midPrice',route.midPrice.toSignificant(6));
        console.log('midPrice invert',route.midPrice.invert().toSignificant(6));
        console.log('executionPrice',trade.executionPrice.toSignificant(6));
        console.log('nextMidPrice',trade.nextMidPrice.toSignificant(6));

        // 0.5%
        const slippageTolerance = new Percent('50', '10000') // 50 bips, 1 bip(基点) = 0.01%
        const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw;
        const path = [weth.address, dai.address];
        const to = signerAddress;
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 最多等20分钟
        const value = trade.inputAmount.raw;
        console.log('value', trade.inputAmount.toSignificant(6), value.toString());
        console.log('amountOutMin',trade.minimumAmountOut(slippageTolerance).toSignificant(6), amountOutMin.toString());

        const uniswapRouter02 = new ethers.Contract(
            uniswapRouter02Address, 
            ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'], 
            signer);

        const tx = await uniswapRouter02.swapExactETHForTokens(
            ethers.BigNumber.from(amountOutMin.toString()),
            path,
            to,
            deadline,
            { value:ethers.BigNumber.from(value.toString()), gasPrice: 20e9 }
        )
        console.log(`Transaction hash: ${tx.hash}`);
        const receipt = await tx.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    }
    return (
        <div className="swap-container">
            <form>
                <div>from:</div>
                <div>
                    <input type="text" ref={token0Input} placeholder="0.0" />
                    <select ref={token0Symbol}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select>
                </div>
                <div>to:</div>
                <div>
                    <input type="text" ref={token1Input} placeholder="0.0" />
                    <select ref={token1Symbol}>
                        <option value="DAI">DAI</option>
                        <option value="ETH">ETH</option>
                        <option value="Cur">Cur</option>
                    </select>
                </div>
                <div>
                    Price: 1 ETH = 1651 DAI
                </div>
                <div>
                    <button type="submit" onClick={clickApprove}>Approve</button>
                    <span>&nbsp;</span>
                    <button type="submit" onClick={clickSwap}>Swap</button>
                </div>
                <div>
                    Minimum Received: 0.241891 DAI
                </div>
                <div>
                    {"Price Impace: -0.01%"}
                </div>
                <div>
                    {`Router: DAI -> WETH`}
                </div>
            </form>
        </div>
    )
}

export default Swap;