import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useEthersAppContext, EthersModalConnector } from 'eth-hooks/context';
import WalletConnectProvider from "@walletconnect/web3-provider";

const Web3ModalContext = createContext();
function useWeb3ModalContext() {
    return useContext(Web3ModalContext);
}

const web3Config = {
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions: {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                rpc: {
                    1: "https://eth-mainnet.g.alchemy.com/v2/3Fwz5Vj7T37o7cHOowrarmQHRwrn3uwR",
                    31337: "http://127.0.0.1:8545",
                }
                // infuraId: "460f40a260564ac4a4f4b3fffb032dad"
            },
        },
    },
}

function Provider({ children }) {
    const ethersContext = useEthersAppContext();
    const createLoginConnector = useCallback(
        (id) => {
            if (web3Config) {
                const connector = new EthersModalConnector({ ...web3Config, theme: 'light' }, id);
                return connector;
            }
        },
        []
    );
    const connect = useCallback(() => {
        if (ethersContext?.openModal) {
            ethersContext.openModal(createLoginConnector());
        }
    }, [createLoginConnector, ethersContext])
    const disconnect = useCallback(() => {        
        if (ethersContext?.disconnectModal) {
            ethersContext.disconnectModal();
        }
    }, [ethersContext]);

    const contextValue = useMemo(() => ({
        connect,
        disconnect
    }), [connect, disconnect]);

    return (
        <Web3ModalContext.Provider value={contextValue}>
            {children}
        </Web3ModalContext.Provider>
    )
}

export default Provider;
export {
    useWeb3ModalContext
}


// ethersContext.disconnectModal的行为
// const disconnectModal = useCallback<IEthersContext['disconnectModal']>(
//     (onSuccess?: () => void) => {
//       ethersConnector.resetModal(); // reset modal and clearcache
//       deactivate();
//       onSuccess?.();
//     },
//     [deactivate, ethersConnector]
//   );
// public resetModal(): void {
//     if (this._web3Modal) {
//       this._web3Modal.clearCachedProvider();
//       this._providerBase = undefined;
//       this._ethersProvider = undefined;
//       this._signer = undefined;
//       this.emitUpdate?.({ account: undefined, provider: undefined, chainId: undefined });
//     }
//   }
