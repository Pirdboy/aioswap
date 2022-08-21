// 测试decimal.js-light的使用
// 9007199254740991
// balance string 7912448124073799426285
// 7912.448124073799426285
const ethers = require('ethers');
let Decimal = require('decimal.js-light');

// let a = ethers.BigNumber.from('7912448124073799426285');
// let b = ethers.utils.formatUnits(a, 'ether');
// let x = new Decimal(b);
// let x2 = x.toSignificantDigits(6);
// console.log(x2);
// console.log(x2.toString());
// let x3 = x.toSignificantDigits(6, 1) // ROUND_DOWN
// console.log(x3.toString())

console.log("----------------------");

let zero = ethers.constants.Zero;
zero = ethers.utils.formatUnits(zero, 'wei');
console.log('zero',zero);
let zeroD = new Decimal(zero);
let zeroD6 = zeroD.toSignificantDigits(6, 1);
// console.log(zeroD6);
console.log(zeroD6.toString());