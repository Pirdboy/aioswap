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
    chainId: "0x0",
};

const UPDATE = 'UPDATE';
const RESET = 'RESET';

function reducer(state, { type, payload }) {
    switch (type) {
        case UPDATE: {
            return Object.assign({}, state, payload);
        }
        case RESET: {
            return Object.assign({}, initialState);
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
        resetAccount: () => {
            dispatch({ type: RESET })
        }
    };
    return (
        <AccountContext.Provider value={contextValue}>
            {children}
        </AccountContext.Provider>
    )
}
