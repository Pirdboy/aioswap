const {tokens} = require('./tokens1inch');

const {tokensUniswap} = require('./tokensUniswap');
const fs = require('node:fs/promises');

const main = async () => {
    // 要按symbol的字典顺序输出
    // 只需要chainId为1的
    // [{"address":"0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45","chainId":1,"name":"Stox","symbol":"STX","decimals":18,"logoURI":"https://tokens.1inch.io/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45.png"},{"address":"0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd","chainId":1,"name":"PieDAOBTC++","symbol":"BTC","decimals":18,"logoURI":"https://tokens.1inch.io/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png"}]
    let tokenArray = tokensUniswap.tokens.filter(e => e.chainId === 1);
    tokenArray = tokenArray.map(e => ({
        chainId: e.chainId,
        address: e.address,
        name: e.name,
        symbol: e.symbol,
        decimals: e.decimals,
        logoURI: e.logoURI
    }));
    tokenArray.sort((e1, e2) => {
        if(e1.symbol < e2.symbol) {
            return -1;
        }
        if(e1.symbol === e2.symbol) {
            return 0;
        }
        if(e1.symbol > e2.symbol) {
            return 1;
        }
    })
   
    await fs.writeFile('./data-uniswap.txt', JSON.stringify(tokenArray));
};

main()
    .then(()=>{
        console.log('finished...')
    })
    .catch(e => {
        console.log(e)
        process.exit(1)
    })