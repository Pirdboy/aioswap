import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Swap from "./components/Swap";
import SwapTest from "./components/Swap/SwapTest";
import { ModalWarning, ModalTokenSelect } from "./components/Modal";
import { Box, ChakraProvider } from '@chakra-ui/react';

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

    const [showMetaMaskWarning, setShowMetaMaskWarning] = useState(false);
    const [showNetworkWarning, setShowNetworkWarning] = useState(false);
    const [showTokenList, setShowTokenList] = useState(false);

    return (
        <ChakraProvider>
            <Background>
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
                <ModalTokenSelect isOpen={showTokenList} onClose={() => setShowTokenList(false)} />
                <Header />
                <Swap />
                <SwapTest />
            </Background>
        </ChakraProvider>
    )
};

export default App;


    // const getProviderFromMetaMask = async () => {
    //     const { ethereum } = window;
    //     if (!ethereum) {
    //         console.log("MetaMask not detected");
    //         setShowMetaMaskWarning(true);
    //         return;
    //     }
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     setEthersProvider(provider);
    //     const chainId = (await provider.getNetwork()).chainId;
    //     console.log('chainId:', chainId);
    //     if (chainId === ChainIdList.hardhat) {
    //         setShowNetworkWarning(false);
    //     } else {
    //         setShowNetworkWarning(true);
    //     }
    // }
    // useEffect(() => {
    //     getProviderFromMetaMask();
    // }, [])