import React from "react";
import { Box, Center } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';


const ChakraTemp = () => {
    return (
        <ChakraProvider>
            <Box w="100vw" bg="#CCCCCC" h='100vh'>
                <Box h="48px" bg="#999999" >
                </Box>
                <Center minH="110px" bg="#99CCFF" >
                    There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
                </Center>
            </Box>
        </ChakraProvider>
    )
};


export default ChakraTemp;