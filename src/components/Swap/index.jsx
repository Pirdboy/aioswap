import React, { useEffect, useState, useCallback } from "react";
import { Box, Flex, Center, Input, IconButton, Button, Divider, Icon } from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { IoRepeat, IoChevronForward } from 'react-icons/io5';

import { ModalTokenSelect } from "../Modal";
import NumberInput from "../NumberInput";
import { DefaultTokenIn, DefaultTokenOut } from "../../constants/TokenList";
import { getERC20Balance, getBalance } from "../../utils/EthersWrap";
import TokenBalance, { TokenBalanceZero } from "../../utils/TokenBalance";
import { getBestTradeExactIn } from "../../utils/UniswapV2Wrap";
import { useAccountContext } from "../../contexts/Account";

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
    const { address, chainId, isConnected } = useAccountContext();

    const [tokenInInfo, setTokenInInfo] = useState(DefaultTokenIn);
    const [tokenInBalance, setTokenInBalance] = useState(TokenBalanceZero);
    const [tokenInValue, setTokenInValue] = useState('');
    const [tokenOutInfo, setTokenOutInfo] = useState(DefaultTokenOut);
    const [tokenOutBalance, setTokenOutBalance] = useState(TokenBalanceZero);
    const [tokenOutValue, setTokenOutValue] = useState('');
    const [price, setPrice] = useState('');
    const [priceInvert, setPriceInvert] = useState('');
    const [priceShowInvert, setPriceShowInvert] = useState(false);
    const [minimumReceived, setMinimumReceived] = useState('');
    const [tradePath, setTradePath] = useState([]);

    const tradePathDisplay = tradePath.map((e, i) => (
        i > 0
            ? (<Center key={i}><Icon as={IoChevronForward} />{e}</Center>)
            : (<Center key={i}>{e}</Center>)
    ));
    const clearBothInput = () => {
        setTokenInValue('');
        setTokenOutValue('');
    };
    const setTrade = ({ price, priceInvert, amountOut, minimumAmountOut, path }) => {
        price && setPrice(price);
        priceInvert && setPriceInvert(priceInvert);
        amountOut && setTokenOutValue(amountOut);
        minimumAmountOut && setMinimumReceived(minimumAmountOut);
        path && setTradePath(path);
    };

    const onTokenInInput = async (val) => {
        setTokenInValue(val);
        if (!val || parseFloat(val) === 0) {
            clearBothInput();
            return;
        }
        const trade = await getBestTradeExactIn(tokenInInfo, val, tokenOutInfo, "0.5");
        setTrade(trade);
    };
    const onTokenOutInput = async (val) => {
        setTokenOutValue(val);
        if (!val || parseFloat(val) === 0) {
            return;
        }
    };
    const onTokenInSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenInInfo.symbol) {
            return;
        }
        console.log('onTokenInSelect', tokenObj);
        setTokenInInfo(tokenObj);
        clearBothInput();
    }
    const onTokenOutSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenOutInfo.symbol) {
            return;
        }
        console.log('onTokenOutSelect', tokenObj);
        setTokenOutInfo(tokenObj);
        clearBothInput();
    }

    useEffect(() => {
        const fetchTokenInBalance = async () => {
            if (!isConnected) {
                setTokenInBalance(TokenBalanceZero);
                return;
            }
            let balance;
            if (tokenInInfo.symbol === 'ETH') {
                balance = await getBalance(address);
            } else {
                balance = await getERC20Balance(address, tokenInInfo);
            }
            setTokenInBalance(balance);
        };
        fetchTokenInBalance();
    }, [tokenInInfo, address, isConnected]);

    useEffect(() => {
        const fetchTokenOutBalance = async () => {
            if (!isConnected) {
                setTokenOutBalance(TokenBalanceZero);
                return;
            }
            let balance;
            if (tokenOutInfo.symbol === 'ETH') {
                balance = await getBalance(address);
            } else {
                balance = await getERC20Balance(address, tokenOutInfo);
            }
            setTokenOutBalance(balance);
        };
        fetchTokenOutBalance();
    }, [tokenOutInfo, address, isConnected]);

    const tokenInValueBalance = TokenBalance.fromDisplayAmount(tokenInValue || '0', tokenInInfo.decimals);
    let buttonDisplay = 0;
    if(tokenInValueBalance.eq(TokenBalanceZero)) {
        buttonDisplay = 1;
    } else if(tokenInValueBalance.gt(tokenInBalance)) {
        buttonDisplay = 2;
    }

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
                        <Center>{`Balance ${tokenInBalance.toString()}`}</Center>
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
                        <Center>{`Balance ${tokenOutBalance.toString()}`}</Center>
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
                    <Flex>{`Route choose(not implemented)`}</Flex>
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
                {
                    buttonDisplay === 0 ?
                        <>
                            <Center>
                                <Button colorScheme='blue'>Approve</Button>
                                <Box w="10px"></Box>
                                <Button colorScheme='blue'>Swap</Button>
                            </Center>
                        </>
                        :
                        buttonDisplay === 1 ?
                            <>
                                <Flex>
                                    <Button
                                        isDisabled={true}
                                        width="100%"
                                        color="white"
                                        colorScheme='whiteAlpha'>
                                        Enter Amount
                                    </Button>
                                </Flex>
                            </> :
                            <>
                                <Flex>
                                    <Button
                                        isDisabled={true}
                                        width="100%"
                                        color="white"
                                        colorScheme='whiteAlpha'>
                                        Insufficient {tokenInInfo.symbol} balance
                                    </Button>
                                </Flex>
                            </>
                }
                {/* trade estimate display */}
                <Box>
                    <Flex justify="space-between">
                        <Center>Minimum received</Center>
                        <Center>{`${minimumReceived} ${tokenOutInfo.symbol}`}</Center>
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