import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import TestPanel from "./components/TestPanel";
import Swap from "./components/Swap";
import { ModalWarning } from "./components/Modal";
import { Box} from '@chakra-ui/react';

const Background = ({ children }) => {
    return (
        <Box bg="gray.600" w="100vw" h="100vh">
            {children}
        </Box>
    )
}

const App = () => {
    useEffect(() => {
        document.title = "aioswap";
    }, []);

    const showTestPanel = true;

    const [showMetaMaskWarning, setShowMetaMaskWarning] = useState(false);
    const [showNetworkWarning, setShowNetworkWarning] = useState(false);

    return (
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
                {`Your wallet is not corrected to the right network, please connect to the hardhat local network at http://localhost:8545`}
            </ModalWarning>
            <Header />
            <Swap />
        </Background>
    )
};

export default App;