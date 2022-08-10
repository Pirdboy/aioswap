import React, { useEffect } from "react";
// import Layout from "./components/Layout";
import './App.css';
import Logo from "./components/Logo";
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
    useEffect(() => {
        document.title = "aioswap";
    }, []);
    return (
        <ChakraProvider>
            <div className="root-container">
                <Logo className="logo-position" />
            </div>
        </ChakraProvider>
    )
};

export default App;