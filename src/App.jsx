import React, {useEffect} from "react";
import Layout from "./components/layout";
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
    useEffect(() => {
        document.title = "aioswap";
    }, []);
    return (
        <ChakraProvider>
            <Layout />
        </ChakraProvider>
    )
};

export default App;