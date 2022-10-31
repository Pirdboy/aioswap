import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import TestPanel from "./components/TestPanel";
import Swap from "./components/Swap";
import { ModalWarning } from "./components/Modal";
import { Box, ChakraProvider } from '@chakra-ui/react';
import { isMetaMaskInstall } from "./utils/EthersWrap";
import { useAccountContext } from "./contexts/Account";

function IsSupportedChain(chainId) {
    return (
        chainId === 1 ||
        chainId === 31337
    );
}

const Background = ({ children }) => {
    return (
        <Box bg="gray.600" w="100vw" h="100vh">
            {children}
        </Box>
    )
}

const App = () => {
    const { account, chainId } = useAccountContext();
    const showTestPanel = process.env.NODE_ENV === 'development';
    const [showMetaMaskWarning, setShowMetaMaskWarning] = useState(false);
    const [showNetworkWarning, setShowNetworkWarning] = useState(false);

    useEffect(() => {
        document.title = "aioswap";
    }, []);

    useEffect(() => {
        if (!isMetaMaskInstall()) {
            setShowMetaMaskWarning(true);
        }
    }, []);

    useEffect(() => {
        if (chainId && !IsSupportedChain(chainId)) {
            setShowNetworkWarning(true);
        } else {
            setShowNetworkWarning(false);
        }
    }, [chainId])

    return (
        <ChakraProvider>
            <Background>
                {
                    showTestPanel ? <><TestPanel /></> : <></>
                }
                <ModalWarning
                    title="Metamask not detected"
                    isOpen={showMetaMaskWarning}
                    onClose={() => setShowMetaMaskWarning(false)}
                >
                    {`You should install metamask extension first, and refresh this page.`}
                </ModalWarning>
                <ModalWarning
                    title="Wrong Network"
                    isOpen={showNetworkWarning}
                    onClose={() => setShowNetworkWarning(false)}
                >
                    {`Your wallet is not corrected to the right network, please connect to mainnet`}
                </ModalWarning>
                <Header />
                <Swap />
            </Background>
        </ChakraProvider>
    )
};

export default App;