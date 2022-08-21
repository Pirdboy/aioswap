const ethers = require('ethers');
const Decimal = require('decimal.js-light');
/*
 * TokenBalance,封装ethers.BigNumber,方便代币余额的显示和比较
 */
class TokenBalance {
    constructor() {
        this.rawAmount = ethers.BigNumber.from(0);
        this.unitsOrDecimals = 0;
    }

    /**
     * 由代币真实金额创建TokenBalance
     * @param {string | ethers.BigNumber} rawAmount
     * @param {number | string} 代币decimals或者units
     * @returns {TokenBalance}
     */
    static fromRawAmount(rawAmount, unitsOrDecimals) {
        let t = new TokenBalance();
        if(typeof(rawAmount) === 'string') {
            t.rawAmount = ethers.BigNumber.from(rawAmount);
        } else {
            t.rawAmount = rawAmount;
        }
        t.unitsOrDecimals = unitsOrDecimals;
        return t;
    }

    /**
     * 由代币展示金额创建TokenBalance
     * @param {string} displayAmount
     * @param {number | string} 代币decimals或者units
     * @returns {TokenBalance}
     */
    static fromDisplayAmount(displayAmount, unitsOrDecimals) {
        if(typeof(displayAmount) !== 'string') {
            throw new Error('displayAmount must be string');
        }
        let t = new TokenBalance();
        t.rawAmount = ethers.utils.parseUnits(displayAmount, unitsOrDecimals);
        t.unitsOrDecimals = unitsOrDecimals;
        return t;
    }

    /**
     * equal
     * @param {TokenBalance} other
     * @returns {boolean}
     */
    eq(other) {
        return this.rawAmount.eq(other.rawAmount);
    }

    /**
     * less than
     * @param {TokenBalance} other
     * @returns {boolean}
     */
    lt(other) {
        return this.rawAmount.lt(other.rawAmount);
    }

    /**
     * less than or equal
     * @param {TokenBalance} other
     * @returns {boolean}
     */
    lte(other) {
        return this.rawAmount.lte(other.rawAmount);
    }

    /**
     * greater than
     * @param {TokenBalance} other
     * @returns {boolean}
     */
    gt(other) {
        return this.rawAmount.gt(other.rawAmount);
    }

    /**
     * greater than or equal
     * @param {TokenBalance} other
     * @returns {boolean}
     */
    gte(other) {
        return this.rawAmount.gte(other.rawAmount);
    }

    /**
     * 计算了decimals后的金额字符串,6位有效数字
     * @return {string} balance
     */
    toString() {
        let s = ethers.utils.formatUnits(this.rawAmount, this.unitsOrDecimals);
        let d = new Decimal(s);
        return d.toSignificantDigits(6, 1).toString();
    }

    /**
     * 合约的真实数额字符串(ethers.BigNumber.toString())
     * @returns {string}
     */
    toRawString() {
        return this.rawAmount.toString();
    }
}

const TokenBalanceZero = new TokenBalance();

export default TokenBalance;
export {
    TokenBalanceZero
};