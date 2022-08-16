import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Swap from "./components/Swap";
import { ModalWarning, ModalTokenSelect } from "./components/Modal";
import { Box, Button, ChakraProvider } from '@chakra-ui/react';

import {
    createClient,
    chain,
    WagmiConfig,
    configureChains,
    useAccount,
    useConnect,
    useDisconnect
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const ethers = require('ethers');
const hardhatProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// configureChains wraps the providers that you provide into an ethers.js FallbackProvider
// const {chains, provider:localProvider} = configureChains(
//     [chain.hardhat],
//     [jsonRpcProvider({
//         rpc:()=>({
//             http: 'http://localhost:8545',
//         }),
//         static: false,
//     })],
// );

// autoConnect:true会导致一些bug
// 比如wagmi的useBalance等hook会出错
// useBalance等hook必须在手动connect之后才能使用
const wagmiClient = createClient({
    autoConnect: false,
    connectors: [
        new MetaMaskConnector({
            chains: [chain.hardhat]
        }),
    ],
    provider: hardhatProvider,
});

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
            <WagmiConfig client={wagmiClient}>
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
                </Background>
            </WagmiConfig>
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