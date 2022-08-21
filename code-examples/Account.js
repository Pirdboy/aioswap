import React, {
    createContext,
    useReducer,
    useContext
} from 'react'


export const AccountContext = createContext();
export function useAccountContext() {
    return useContext(AccountContext);
}

const initialState = {
    address: "",
    chainId: 1,
    isConnected: false,
};

const UPDATE = 'UPDATE';
const RESET = 'RESET';

// reducer里不应该有side effect
function reducer(state, { type, payload }) {
    switch (type) {
        case UPDATE: {
            return Object.assign({}, state, payload);
        }
        default: {
            throw Error(`Unexpected action type in AccountContext reducer: ${type}`);
        }
    }
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = {
        account: state,
        updateAccount: (address, chainId) => {
            dispatch({ type: UPDATE, payload: { address, chainId } });
        },
        onConnected: (address, chainId) => {
            dispatch({ type: UPDATE, payload: { address, chainId, isConnected: true } })
        },
        onDisconnected: () => {
            dispatch({ type: UPDATE, payload: { address: '', chainId: 0, isConnected: false } })
        }
    };
    return (
        <AccountContext.Provider value={contextValue}>
            {children}
        </AccountContext.Provider>
    )
}
