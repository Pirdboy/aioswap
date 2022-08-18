// 测试decimal.js-light的使用
// 9007199254740991
// balance string 7912448124073799426285
// 7912.448124073799426285
const ethers = require('ethers');
let a = ethers.BigNumber.from('7912448124073799426285');
let b = ethers.utils.formatUnits(a, 'ether');
let Decimal = require('decimal.js-light');
let x = new Decimal(b);
let x2 = x.toSignificantDigits(6);
console.log(x2);
console.log(x2.toString());
let x3 = x.toSignificantDigits(6, 1) // ROUND_DOWN
console.log(x3.toString())