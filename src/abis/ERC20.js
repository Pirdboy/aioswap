const ethers = require('ethers');

const ABI = [
    'function name() external view returns (string memory)',
    'function symbol() external view returns (string memory)',
    'function decimals() external view returns (uint8)',
    'function totalSupply() external view returns (uint256)',
    'function balanceOf(address account) external view returns (uint256)',
    'function allowance(address owner, address spender) external view returns (uint256)',
    'function approve(address spender, uint256 amount) external returns (bool)',
    'function transfer(address to, uint256 amount) external returns (bool)',
    'function transferFrom(address from, address to, uint256 amount) external returns (bool)'
];
const ERC20ABI = new ethers.utils.Interface(ABI);

module.exports = {
    ERC20ABI
}