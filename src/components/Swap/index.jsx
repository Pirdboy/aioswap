import React, { useEffect, useState } from "react";
import { Box, Flex, Center, Input, IconButton, Button, Divider, Icon } from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { IoRepeat, IoChevronForward } from 'react-icons/io5';

import { ModalTokenSelect } from "../Modal";
import NumberInput from "../NumberInput";
import { DefaultTokenIn, DefaultTokenOut } from "../../constants/TokenList";

import {

} from "../../globals/EthersWrap";

const TokenInput = ({
    value,
    tokenSymbol,
    onInputValue,
    onSelectToken,
}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Flex>
            <NumberInput onInputValue={onInputValue} value={value} />
            <Button colorScheme="blackAlpha" rightIcon={<ChevronDownIcon />} onClick={() => setShowModal(true)}>
                {tokenSymbol ?? 'Select Token'}
            </Button>
            <ModalTokenSelect isOpen={showModal} onSelectToken={(tokenObj) => {
                setShowModal(false);
                onSelectToken && onSelectToken(tokenObj);
            }} />
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
    const [isConnected, setConnected] = useState(false);
    const [tokenInInfo, setTokenInInfo] = useState(DefaultTokenIn);
    const [tokenInBalance, setTokenInBalance] = useState('0');
    const [tokenInValue, setTokenInValue] = useState('');
    const [tokenOutInfo, setTokenOutInfo] = useState(DefaultTokenOut);
    const [tokenOutBalance, setTokenOutBalance] = useState('0');
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
    const onTokenInInput = (val) => {
        setTokenInValue(val);
    };
    const onTokenOutInput = (val) => {
        setTokenOutValue(val);
    };
    const onTokenInSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenInInfo.symbol) {
            return;
        }
        console.log('onTokenInSelect', tokenObj);
        setTokenInInfo(tokenObj);
    }
    const onTokenOutSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenOutInfo.symbol) {
            return;
        }
        console.log('onTokenOutSelect', tokenObj);
        setTokenOutInfo(tokenObj);
    }

    // 问题: 连接、账户地址等状态,在Account、Swap中都要用到
    const fetchTokenInBalance = async () => {

    };

    const fetchTokenOutBalance = async () => {

    };
    // useEffect(() => {

    // }, []);

    // useEffect(() => {

    // }, []);

    // useEffect(() => {

    // }, []);

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
                        <Center>{`Balance ${tokenInBalance}`}</Center>
                    </Flex>
                    <TokenInput
                        tokenSymbol={tokenInInfo.symbol}
                        value={tokenInValue}
                        onInputValue={onTokenInInput}
                        onSelectToken={onTokenInSelect}
                    />
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
                        <Center>{`Balance ${tokenOutBalance}`}</Center>
                    </Flex>
                    <TokenInput
                        tokenSymbol={tokenOutInfo.symbol}
                        value={tokenOutValue}
                        onInputValue={onTokenOutInput}
                        onSelectToken={onTokenOutSelect}
                    />
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
                            `1 ${tokenOutInfo.symbol} = ${priceInvert} ${tokenInInfo.symbol}` :
                            `1 ${tokenInInfo.symbol} = ${price} ${tokenOutInfo.symbol}`}
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
                        <Center>{`${minimumReceived} ${tokenOutInfo.symbol}`}</Center>
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