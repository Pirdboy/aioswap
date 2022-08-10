import React, { useEffect } from "react";
// import Layout from "./components/Layout";
import './App.css';
import Logo from "./components/Logo";
import {Box, Spacer,Flex, ChakraProvider } from '@chakra-ui/react';


const App = () => {
    useEffect(() => {
        document.title = "aioswap";
    }, []);
    return (
        <ChakraProvider>
            <Box bg="rgb(44,47,54)" w="100vw" h="100vh">
                <Flex pl="20px" pt="4px" pr="20px" justify="space-between">
                    <Logo />
                    <Logo />
                </Flex>
            </Box>
        </ChakraProvider>
    )
};

export default App;