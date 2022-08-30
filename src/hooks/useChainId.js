import { useCallback, useEffect, useState } from 'react';
import { getChainId, getEthersProvider } from '../utils/EthersWrap';

function useChainId() {
    const [chainId, setChainId] = useState(1);

    const fetchChainId = useCallback(async () => {
        const c = await getChainId();
        console.log('fetchChainId',c);
        setChainId(c);
    }, []);

    useEffect(() => {
        fetchChainId();
    }, [fetchChainId]);

    useEffect(() => {
        getEthersProvider().provider.on('chainChanged', fetchChainId);
        return () => {
            getEthersProvider().provider.removeListener('chainChanged', fetchChainId);
        }
    }, [fetchChainId]);

    return chainId;
}

export default useChainId;