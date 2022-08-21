/*
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
// ethers.js创建MetaMask provider
const provider = new ethers.providers.Web3Provider(window.ethereum)

// ethers.js请求连接钱包
// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// ethers.js获取chainId
const chainId = (await provider.getNetwork()).chainId;

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()


 const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner();


let chainId = await ethereum.request({ method: 'eth_chainId' });


// 查看账户列表
const accounts = await ethereum.request({ method: 'eth_accounts' });
if (accounts.length !== 0) {
    console.log('Found authorized Account: ', accounts[0]);
    setCurrentAccount(accounts[0]);
} else {
    console.log('No authorized account found');
}


// 客户端ethers.js获取signer,要求先连接到MetaMask才行
const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner();
const nftContract = new ethers.Contract(
    nftContractAddress,
    NFT.abi,
    signer
);

*/