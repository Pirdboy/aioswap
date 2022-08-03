import React from "react";
import Swap from "../swap";
import {Center} from '@chakra-ui/react';

const MainLayout = () => {
    return (
        <>
            <Center bg="#CCCCCC" h="100vh">
                <Swap />
            </Center>
        </>
    )
};

export default MainLayout;