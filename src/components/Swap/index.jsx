import React, { useState } from "react";
import { Box, Flex, Center, Input, IconButton, Button, Divider, Icon } from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { IoRepeat, IoChevronForward } from 'react-icons/io5';


const TokenInput = ({
    tokenSymbol,
    onUserInput,
    value
}) => {
    const enforceNumber = e => {
        const value = e.target.value;
        console.log("enforceNumber, value",value);
        if ((value === '' || value.match(/^[0-9]+\.?[0-9]*$/)) && value.length < 16) {
            console.log("enforceNumber control");
            onUserInput(value);
        }
    };
    return (
        <Flex>
            <Input placeholder="0.0" value={value} onChange={enforceNumber} />
            <Button colorScheme="blackAlpha" rightIcon={<ChevronDownIcon />}>
                {tokenSymbol ?? 'Select Token'}
            </Button>
        </Flex>
    )
};

const SwapChoice = ({
    title,
    minimumReceived,
    selected
}) => {
    const borderStyle = selected ? "1px solid rgb(47,138,245)" : "1px solid rgb(55,68,90)";
    return (
        <Flex padding="5px" justify="space-between" borderRadius="10px" border={borderStyle}>
            <Center>{title}</Center>
            <Center>{minimumReceived}</Center>
        </Flex>
    )
};

const Swap = () => {
    const [tokenInBalance, setTokenInBalance] = useState('0');
    const [tokenOutBalance, setTokenOutBalance] = useState('0');
    const [tokenInSymbol, setTokenInSymbol] = useState('ETH');
    const [tokenOutSymbol, setTokenOutSymbol] = useState('1INCH');
    const [tokenInValue, setTokenInValue] = useState('');
    const [tokenOutValue, setTokenOutValue] = useState('');
    const [price, setPrice] = useState('1.147');
    const [priceInvert, setPriceInvert] = useState('0.003222');
    const [priceShowInvert, setPriceShowInvert] = useState(false);
    const [minimumReceived, setMinimumReceived] = useState('2.303');
    const [priceImpact, setPriceImpact] = useState('0.36%');
    const [tradePath, setTradePath] = useState(['USDC', 'WETH', '1INCH']);
    const tradePathDisplay = tradePath.map((e, i) => {
        if (i > 0) {
            return (
                <Center key={i}>
                    <Icon as={IoChevronForward} />
                    {e}
                </Center>
            )
        } else {
            return (
                <Center key={i}>{e}</Center>
            )
        }
    });

    const onTokenInUserInput = (val) => {
        setTokenInValue(val);
    };
    const onTokenOutUserInput = (val) => {
        setTokenOutValue(val);
    };
    return (
        <Center bg="gray.600" w="100%" pt="60px">
            <Box borderRadius="10px" padding="4px 10px" bg="black" color="white" minW="400px" minH="100px">
                {/* title, setting button */}
                <Flex justify="space-between">
                    <Center>Swap</Center>
                    <Center>
                        <IconButton
                            aria-label="swap settings"
                            icon={<SettingsIcon />}
                            size="sm"
                            variant="unstyled"
                        />
                    </Center>
                </Flex>
                {/* tokenIn */}
                <Box border="1px solid rgb(43,46,53)" borderRadius="10px" >
                    <Flex justify="space-between">
                        <Center>From</Center>
                        <Center>Balance: {tokenInBalance}</Center>
                    </Flex>
                    <TokenInput tokenSymbol={tokenInSymbol} value={tokenInValue} onUserInput={onTokenInUserInput} />
                </Box>
                {/* token inversion button */}
                <Box>
                    <IconButton
                        aria-label="token inversion"
                        icon={<ArrowDownIcon />}
                        size="sm"
                        variant="unstyled"
                    />
                </Box>
                {/* tokenOut */}
                <Box border="1px solid rgb(43,46,53)" borderRadius="10px" >
                    <Flex justify="space-between">
                        <Center>To</Center>
                        <Center>Balance: {tokenOutBalance}</Center>
                    </Flex>
                    <TokenInput tokenSymbol={tokenOutSymbol} value={tokenOutValue} onUserInput={onTokenOutUserInput} />
                </Box>
                <Box h="10px"></Box>
                {/* Route choose */}
                <Box>
                    <SwapChoice title="Uniswap V2" minimumReceived="0.241368" selected={true} />
                    <SwapChoice title="1inch" minimumReceived="0.240792" />
                </Box>
                {/* price */}
                <Flex justify="space-between">
                    <Center>Price</Center>
                    <Center>
                        {priceShowInvert ?
                            `1 ${tokenOutSymbol} = ${priceInvert} ${tokenInSymbol}` :
                            `1 ${tokenInSymbol} = ${price} ${tokenOutSymbol}`}
                        <IconButton
                            pl="10px"
                            aria-label="transfer price"
                            icon={<IoRepeat />}
                            size="lg"
                            variant="unstyled"
                            onClick={() => setPriceShowInvert(prev => !prev)}
                        />
                    </Center>
                </Flex>
                {/* approve, swap, insufficient button */}
                <Center>
                    <Button colorScheme='blue'>Approve</Button>
                    <Box w="10px"></Box>
                    <Button colorScheme='blue'>Swap</Button>
                </Center>
                {/* trade estimate display */}
                <Box>
                    <Flex justify="space-between">
                        <Center>Minimum received</Center>
                        <Center>{`${minimumReceived} ${tokenOutSymbol}`}</Center>
                    </Flex>
                    <Flex justify="space-between">
                        <Center>Price Impact</Center>
                        <Center>{`${priceImpact}`}</Center>
                    </Flex>
                    <Flex justify="space-between">
                        <Center>{`Network Fee (reserved)`}</Center>
                    </Flex>
                    <Divider />
                    <Box>
                        <Box>Route</Box>
                        <Box border="1px solid rgb(63,67,78)" borderRadius="10px">
                            <Center>
                                {tradePathDisplay}
                            </Center>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Center>
    )
};

export default Swap;