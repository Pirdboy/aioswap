import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AccountContextProvider from "./contexts/Account";
import Web3ModalContextProvider from './contexts/Web3Modal';
import { ChakraProvider } from '@chakra-ui/react';
import { EthersAppContext } from 'eth-hooks/context';



function ContextProvider({ children }) {
    return (
        <EthersAppContext>
            <AccountContextProvider>
            <Web3ModalContextProvider>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </Web3ModalContextProvider>
            </AccountContextProvider>
        </EthersAppContext>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
