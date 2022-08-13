import React, { useEffect } from "react";
import './App.css';
import {Box, ChakraProvider } from '@chakra-ui/react';
import Header from "./components/Header";
import Swap from "./components/Swap";

const Background = ({children}) => {
    return (
        // <Box bg="rgb(42,52,68)" w="100vw" h="100vh">
        <Box bg="gray.600" w="100vw" h="100vh">
            {children}
        </Box>
    )
}

const App = () => {
    useEffect(() => {
        document.title = "aioswap";
    }, []);
    return (
        <ChakraProvider>
            <Background>
                <Header />
                <Swap />
            </Background>
        </ChakraProvider>
    )
};

export default App;