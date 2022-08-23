import {
    ChainId,
    Fetcher,
    Route,
    Trade,
    TokenAmount,
    TradeType,
    Percent
} from '@uniswap/sdk';
import { ethers } from "ethers";
import uniswapRouter02ABI from "../abis/uniswapRouter02ABI.json";
import tokenList from './TokenList';

const chainId = ChainId.MAINNET;
const privateKeys = [
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
    "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
    "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
    "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",
    "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",
    "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
    "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",
    "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
    "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897",
    "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82",
    "0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1",
    "0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd",
    "0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa",
    "0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61",
    "0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0",
    "0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd",
    "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0",
    "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
];
const uniswapRouter02Address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const decimals = 1e18;

const privateKey = privateKeys[1];

export const estimateTrade = async (token0Symbol, token0Input, token1Symbol, slippage) => {
    // 暂时先临时创建provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let token0Amount = ethers.utils.parseEther(token0Input);
    const token0 = !tokenList[token0Symbol] ? null :
        await Fetcher.fetchTokenData(chainId, tokenList[token0Symbol], provider);
    const token1 = !tokenList[token1Symbol] ? null :
        await Fetcher.fetchTokenData(chainId, tokenList[token1Symbol], provider);
    const pair = await Fetcher.fetchPairData(token0, token1, provider);
    const route = new Route([pair], token0);
    const trade = new Trade(route, new TokenAmount(token0, token0Amount), TradeType.EXACT_INPUT);

    // price,暂时先用executionPrice
    const price = trade.executionPrice.toSignificant(6);
    const priceInvert = trade.executionPrice.invert().toSignificant(6);

    // priceImpact
    const priceImpact = trade.priceImpact.toFixed(2);

    // amountOut without slippage
    const amountOut = trade.outputAmount.toSignificant(6);

    // minimum received
    // Percent(分子,分母)
    const slippageTolerance = new Percent(Math.round(parseFloat(slippage)*100), '10000') // 50 bips, 1 bip(基点) = 0.01%
    console.log('slippageTolerance',slippageTolerance.toSignificant(3));
    const minimumAmountOut = trade.minimumAmountOut(slippageTolerance).toSignificant(6);

    return {price, priceInvert, priceImpact, minimumAmountOut, amountOut};
};

const swapToken = async (token0Symbol, token0Input, token1Symbol, provider, signer) => {
    let token0Amount = ethers.utils.parseEther(token0Input);
    const token0 = !tokenList[token0Symbol] ? null :
        await Fetcher.fetchTokenData(chainId, tokenList[token0Symbol], provider);
    const token1 = !tokenList[token1Symbol] ? null :
        await Fetcher.fetchTokenData(chainId, tokenList[token1Symbol], provider);
    const pair = await Fetcher.fetchPairData(token0, token1, provider);
    const route = new Route([pair], token0);
    const trade = new Trade(route, new TokenAmount(token0, token0Amount), TradeType.EXACT_INPUT);
    console.log(`Swap ${token0Symbol} to ${token1Symbol} midPrice ${route.midPrice.toSignificant(6)}`);
    console.log(`Swap ${token0Symbol} to ${token1Symbol} midPrice invert ${route.midPrice.invert().toSignificant(6)}`);
    console.log(`Swap ${token0Symbol} to ${token1Symbol} executionPrice ${trade.executionPrice.toSignificant(6)}`);
    console.log(`Swap ${token0Symbol} to ${token1Symbol} nextMidPrice ${trade.nextMidPrice.toSignificant(6)}`);

    const signerAddress = await signer.getAddress();

    // 0.5%
    const slippageTolerance = new Percent('50', '10000') // 50 bips, 1 bip(基点) = 0.01%
    const amountOutMin = ethers.BigNumber.from(trade.minimumAmountOut(slippageTolerance).raw.toString());
    const path = [token0.address, token1.address];
    const to = signerAddress;
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 最多等20分钟
    const inputAmount = ethers.BigNumber.from(trade.inputAmount.raw.toString());
    console.log('inputAmount', inputAmount.toString());
    console.log('amountOutMin', amountOutMin.toString());

    const uniswapRouter02 = new ethers.Contract(
        uniswapRouter02Address,
        uniswapRouter02ABI,
        signer
    );
    if (token0Symbol === 'ETH') {
        console.log("swapExactETHForTokens");
        const tx = await uniswapRouter02.swapExactETHForTokens(
            amountOutMin,
            path,
            to,
            deadline,
            { value: inputAmount, gasPrice: await provider.getGasPrice() }
        );
        console.log(`Transaction hash: ${tx.hash}`);
        const receipt = await tx.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    } else if (token1Symbol === 'ETH') {
        console.log('swapExactTokensForETH',path);
        const tx = await uniswapRouter02.swapExactTokensForETH(
            inputAmount,
            amountOutMin,
            path,
            to,
            deadline,
            //{ gasPrice: 20e9 }
        );
        console.log(`Transaction hash: ${tx.hash}`);
        const receipt = await tx.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    } else {
        console.log("swapExactTokensForTokens path:", path);
        const tx = await uniswapRouter02.swapExactTokensForTokens(
            inputAmount,
            amountOutMin,
            path,
            to,
            deadline,
            //{ gasPrice: await provider.getGasPrice() }
        );
        console.log(`Transaction hash: ${tx.hash}`);
        const receipt = await tx.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    }
};

export const SwapTokenUseMetaMask = async (token0Name, token0Input, token1Name) => {
    const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
    const metamaskSigner = metamaskProvider.getSigner();
    await swapToken(token0Name, token0Input, token1Name, metamaskProvider, metamaskSigner);
};

export const SwapToken = async (token0Name, token0Input, token1Name) => {
    const localProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const localWallet = new ethers.Wallet(privateKey, localProvider);
    await swapToken(token0Name, token0Input, token1Name, localProvider, localWallet);
};


export const ApproveToken = async (tokenName, amount) => {
    console.log(`approveToken ${tokenName} ${amount}`);
    const localProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const localWallet = new ethers.Wallet(privateKey, localProvider);

    const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
    const metamaskSigner = metamaskProvider.getSigner();
    const tokenAddress = tokenList[tokenName];

    const gasPrice = await metamaskProvider.getGasPrice();
    console.log("gasPrice", gasPrice.toString());

    const erc20Contract = new ethers.Contract(
        tokenAddress,
        [
            'function approve(address spender, uint256 amount) external returns (bool)',
            'function allowance(address owner, address spender) public view returns (uint256) '
        ],
        metamaskSigner
    );

    const owner = await metamaskSigner.getAddress();

    let tx = await erc20Contract.approve(
        uniswapRouter02Address,
        ethers.BigNumber.from((parseFloat(amount) * decimals).toString()),
        // {
        //     gasPrice: 20e9,
        //     gasLimit: 3000000
        // }
    );
    console.log(`Transaction hash: ${tx.hash}`);
    let receipt = await tx.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    let allowance = await erc20Contract.allowance(owner, uniswapRouter02Address);
    console.log(`allowance[${owner}][${uniswapRouter02Address}] = ${allowance}`);
}