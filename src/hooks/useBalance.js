import { useState, useEffect, useCallback } from 'react';
import { TokenBalanceZero } from '../utils/TokenBalance';
import { getBalance, getERC20Balance, getEthersProvider } from "../utils/EthersWrap";

function useBalance(token, account) {
    const [balance, setBalance] = useState(TokenBalanceZero);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBalance = useCallback(async () => {
        if (!account) {
            setBalance(TokenBalanceZero);
            setLoading(false);
            setError(null);
            return;
        }
        let b = token.symbol === 'ETH' ?
            await getBalance(account) :
            await getERC20Balance(account, token);
        setBalance(b);
    }, [token, account]);

    useEffect(() => {
        fetchBalance();
    }, [fetchBalance]);

    useEffect(() => {
        getEthersProvider().on('block', fetchBalance);
        return () => {
            getEthersProvider().off('block', fetchBalance);
        }
    },[fetchBalance])

    return { balance, loading, error }
}

export default useBalance;