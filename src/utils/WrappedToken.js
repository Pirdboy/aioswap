// 暂时不区分chainId
const wrapped = {
    "ETH": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",   // WETH
};

function isWrappedToken(tokenA, tokenB) {
    console.log("debug");
    return wrapped[tokenA.symbol] === tokenB.address || (wrapped[tokenB.symbol] && wrapped[tokenB.symbol] === tokenA.address)
}

export {
    isWrappedToken
}