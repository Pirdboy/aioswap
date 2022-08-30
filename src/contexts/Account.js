import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect
} from 'react'

import { checkIfConnectMetaMask, connectMetaMask, getEthersProvider } from '../utils/EthersWrap';

const AccountContext = createContext();
function useAccountContext() {
    return useContext(AccountContext);
}

function Provider({ children }) {
    const [account, setAccount] = useState('');

    const connect = useCallback(async () => {
        const r = await connectMetaMask();
        setAccount(r.address);
    }, []);
    const disconnect = useCallback(() => {
        setAccount('')
    },[]);

    useEffect(() => {
        const checkConnect = async () => {
            try {
                console.log('checkConnect');
                const r = await checkIfConnectMetaMask();
                console.log('checkConnect r.address',r.address);
                setAccount(r.address);
            } catch (error) {
                console.log(error);
                disconnect();
            }
        }
        checkConnect();
    }, [disconnect]);
    
    const onAccountsChanged = useCallback((accounts) => {
        console.log('onAccountsChanged', accounts);
        if(!accounts || accounts.length === 0) {
            disconnect();
        } else {
            setAccount(accounts[0]);
        }
    }, [disconnect]);

    useEffect(() => {
        getEthersProvider().provider.on('accountsChanged', onAccountsChanged);
        return () => {
            getEthersProvider().provider.removeListener('accountsChanged', onAccountsChanged);
        }
    },[onAccountsChanged]);

    const contextValue = {
        account,
        connect,
        disconnect
    }
    return (
        <AccountContext.Provider value={contextValue}>
            {children}
        </AccountContext.Provider>
    )
}

export default Provider;
export {
    useAccountContext
};