import React, {
    createContext,
    useReducer,
    useContext
} from 'react'


const AccountContext = createContext();
function useAccountContext() {
    return useContext(AccountContext);
}

const initialState = {
    address: "",
    chainId: 31337,
    isConnected: false,
};

const UPDATE = 'UPDATE';

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

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = {
        ...state,
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

export default Provider;
export {
    useAccountContext
};