const ethers = require('ethers');

let num1 = ethers.BigNumber.from('10000000000');
let num2 = ethers.BigNumber.from('10000000000');
let num3 = ethers.BigNumber.from('10000000001');

console.log('num1 === num2', num1 === num2);
console.log('num1 == num2', num1 == num2);
console.log('num1.eq(num2)', num1.eq(num2));

let s = ethers.utils.formatUnits(num3, 6);
console.log(s);