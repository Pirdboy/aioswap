import React, { useState } from "react";
import {
    Box,
    Flex,
    HStack,
    Text,
    Divider,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useToast,
    Spinner
} from '@chakra-ui/react'
import tokenList from "../../utils/TokenList";
import {
    SwapToken,
    SwapTokenUseMetaMask,
    ApproveToken
} from "../../utils/SwapTester";

const SwapTest = ({ isOpen, onClose }) => {
    const toast = useToast();
    const [isLoading, setLoading] = useState(false);
    const showToast = () => {
        toast({
            position: "top",
            description: 'finished',
            duration: 1500,
            status: 'success',
            position: 'top-left'
        })
    }
    const swapETHForOthers = async e => {
        e.preventDefault();
        const tokens = Object.keys(tokenList);
        setLoading(true);
        try {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i] === 'ETH') {
                    continue;
                }
                await SwapToken('ETH', '2', tokens[i]);
            }
            console.log("finished...");
            showToast();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    const swapETHForDAI = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await SwapTokenUseMetaMask("ETH", "10.0", "DAI");
            showToast();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    const swapETHForMKR = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await SwapTokenUseMetaMask("ETH", "10.0", "MKR");
            showToast();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    const approveUNI = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await ApproveToken("UNI", "200");
            showToast();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    const approveCRV = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await ApproveToken("CRV", "10");
            showToast();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                size="xs"
                closeOnOverlayClick={true}
            >
                <DrawerOverlay />
                <DrawerContent bg="rgb(45, 55, 72)" color="white">
                    <DrawerCloseButton />
                    <DrawerHeader>Swap测试</DrawerHeader>
                    <DrawerBody>
                        {isLoading ? <Spinner /> : <></>}
                        <Box><Button size="sm" colorScheme="linkedin" onClick={swapETHForOthers}>Swap ETH For Others</Button></Box>
                        <Box h="5px"></Box>
                        <Box><Button size="sm" colorScheme="linkedin" onClick={swapETHForDAI}>Swap 10 ETH For DAI</Button></Box>
                        <Box h="5px"></Box>
                        <Box><Button size="sm" colorScheme="linkedin" onClick={swapETHForMKR}>Swap 10 ETH For MKR</Button></Box>
                        <Box h="5px"></Box>
                        <Box><Button size="sm" colorScheme="yellow" onClick={approveUNI}>Approve 200 UNI For UniswapRouter</Button></Box>
                        <Box h="5px"></Box>
                        <Box><Button size="sm" colorScheme="yellow" onClick={approveCRV}>Approve 10 CRV For UniswapRouter</Button></Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SwapTest;