import { useState, useEffect } from 'react';
import { TokenBalanceZero } from '../utils/TokenBalance';
import { getBalance, getERC20Balance } from "../utils/EthersWrap";

function useBalance(token, account, isConnected) {
    const [balance, setBalance] = useState(TokenBalanceZero);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchBalance = async () => {
            if (!isConnected) {
                setBalance(TokenBalanceZero);
                setLoading(false);
                setError(null);
                return;
            }
            let b = token.symbol === 'ETH' ?
                await getBalance(account) :
                await getERC20Balance(account, token);
            setBalance(b);
        }
        fetchBalance();
    }, [token, account, isConnected]);

    return { balance, loading, error }
}

export default useBalance;