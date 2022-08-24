import React, { useEffect, useState } from "react";
import { Box, Flex, Center, IconButton, Button, Divider, Icon, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { IoRepeat, IoChevronForward } from 'react-icons/io5';

import { ModalTokenSelect } from "../Modal";
import NumberInput from "../NumberInput";
import { DefaultTokenIn, DefaultTokenOut } from "../../constants/TokenList";
import { getERC20Balance, getBalance, getERC20AllowanceOfRouter, approveRouter } from "../../utils/EthersWrap";
import TokenBalance, { TokenBalanceZero } from "../../utils/TokenBalance";
import { getBestTradeExactIn, swapToken } from "../../utils/UniswapV2Wrap";
import { useAccountContext } from "../../contexts/Account";


const TokenInput = ({
    tokenSymbol,
    onSelectToken,
    ...props
}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Flex>
            <NumberInput {...props} />
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
    const [tokenInAllowance, setTokenInAllowance] = useState(TokenBalanceZero);
    const [tokenInValue, setTokenInValue] = useState('');
    const [tokenOutInfo, setTokenOutInfo] = useState(DefaultTokenOut);
    const [tokenOutBalance, setTokenOutBalance] = useState(TokenBalanceZero);
    const [tokenOutValue, setTokenOutValue] = useState('');
    const [forceUpdateAllowance, setForceUpdateAllowance] = useState(false);
    const [trade, setTrade] = useState();
    const [slippageTolerance, setSlippageTolerance] = useState('');
    const [slippageToleranceValue, setSlippageToleranceValue] = useState('0.5');  // 主要是处理默认值
    const [price, setPrice] = useState('');
    const [priceInvert, setPriceInvert] = useState('');
    const [priceShowInvert, setPriceShowInvert] = useState(false);
    const [minimumReceived, setMinimumReceived] = useState('');
    const [tradePath, setTradePath] = useState([]);

    const clearBothInput = () => {
        setTokenInValue('');
        setTokenOutValue('');
    };
    const setTradeInfo = (t) => {
        setTrade(t.trade);
        setPrice(t.price);
        setPriceInvert(t.priceInvert);
        setMinimumReceived(t.minimumReceived);
        setTokenOutValue(t.amountOut);
        setTradePath(t.path);
    };
    const clearTradeInfo = () => {
        setTrade(null);
        setPrice('');
        setPriceInvert('');
        setMinimumReceived('');
        setTokenOutValue('');
        setTradePath([]);
    };
    const tokenInvert = e => {
        e.preventDefault();
        let tIn = tokenInInfo;
        let tOut = tokenOutInfo;
        setTokenInInfo(tOut);
        setTokenOutInfo(tIn);
    };
    const onTokenInSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenInInfo.symbol) {
            return;
        }
        console.log('onTokenInSelect', tokenObj);
        setTokenInInfo(tokenObj);
        clearBothInput();
    };
    const onTokenOutSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenOutInfo.symbol) {
            return;
        }
        console.log('onTokenOutSelect', tokenObj);
        setTokenOutInfo(tokenObj);
        clearBothInput();
    };
    const onSlippageToleranceValueChange = val => {
        setSlippageTolerance(val);
        let val2 = val || "0.5";
        if(slippageToleranceValue !== val2) {
            console.log('setSlippageToleranceValue', val2);
            setSlippageToleranceValue(val2);
        }
    };
    const onApproveClicked = async (e) => {
        e.preventDefault();
        console.log('onApproveClicked');
        await approveRouter(tokenInInfo, tokenInValue);
        setForceUpdateAllowance(true);
    };

    const onSwapClicked = async (e) => {
        e.preventDefault();
        console.log('onSwapClicked');
        await swapToken(trade, tokenInInfo, tokenInValue, tokenOutInfo, slippageToleranceValue);
    }

    // fetchTokenInBalance
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

    // fetchTokenOutBalance
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

    // fetchTokenInAlowance
    useEffect(() => {
        const fetchTokenInAlowance = async () => {
            if (!isConnected) {
                return;
            }
            if (tokenInInfo.symbol === 'ETH') {
                return;
            }
            const allowance = await getERC20AllowanceOfRouter(address, tokenInInfo);
            console.log('fetchTokenInAlowance allowance', allowance.toString());
            setTokenInAllowance(allowance);
        };
        fetchTokenInAlowance();
    }, [tokenInInfo, isConnected, address])

    // forceUpdateTokenInAllowance
    useEffect(() => {
        const fetchTokenInAllowance = async () => {
            if (!forceUpdateAllowance) {
                return;
            }
            if (!isConnected) {
                return;
            }
            if (tokenInInfo.symbol === 'ETH') {
                return;
            }
            const allowance = await getERC20AllowanceOfRouter(address, tokenInInfo);
            console.log('fetchTokenInAlowance(forced) allowance', allowance.toString());
            setTokenInAllowance(allowance);
            setForceUpdateAllowance(false);
        };
        fetchTokenInAllowance();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forceUpdateAllowance])

    // getBestTrade
    useEffect(() => {
        const getBestTrade = async () => {
            if(!tokenInValue || parseFloat(tokenInValue) === 0) {
                return;
            }
            const t = await getBestTradeExactIn(tokenInInfo, tokenInValue, tokenOutInfo, slippageToleranceValue);
            if(t) {
                setTradeInfo(t);
            }
        };
        getBestTrade();
    }, [tokenInInfo, tokenInValue, tokenOutInfo, slippageToleranceValue])

    // clearTradeInfo
    useEffect(() => {
        const f = () => {
            if(!tokenInValue || parseFloat(tokenInValue) === 0) {
                clearTradeInfo();
            }
        };
        f();
    }, [tokenInValue])

    let buttonDisplay = 0;
    {
        const tokenInValueBalance = TokenBalance.fromDisplayAmount(tokenInValue || '0', tokenInInfo.decimals);
        if (tokenInValueBalance.eq(TokenBalanceZero)) {
            buttonDisplay = 1;   // input zero: Enter Amount
        } else if (tokenInValueBalance.gt(tokenInBalance)) {
            buttonDisplay = 2;   // Insufficient Balance
        } else if (tokenInInfo.symbol === 'ETH') {
            buttonDisplay = 3;  // swap button
        } else {
            if (tokenInValueBalance.gt(tokenInAllowance)) {
                buttonDisplay = 4; // approve and disabled swap
            } else {
                buttonDisplay = 3; // swap button
            }
        }
    }

    let buttons;
    if (buttonDisplay === 1) {
        buttons = (
            <>
                <Flex>
                    <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'>Enter Amount</Button>
                </Flex>
            </>
        );
    } else if (buttonDisplay === 2) {
        buttons = (
            <>
                <Flex>
                    <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'> Insufficient {tokenInInfo.symbol} balance</Button>
                </Flex>
            </>
        );
    } else if (buttonDisplay === 3) {
        buttons = (
            <>
                <Center>
                    <Button onClick={onSwapClicked} colorScheme='blue'>Swap</Button>
                </Center>
            </>
        );
    } else if (buttonDisplay === 4) {
        buttons = (
            <>
                <Center>
                    <Button onClick={onApproveClicked} colorScheme='blue'>{`Approve ${tokenInInfo.symbol} Token`}</Button>
                    <Box w="10px"></Box>
                    <Button isDisabled={true} colorScheme='whiteAlpha'>Swap</Button>
                </Center>
            </>
        );
    }

    let priceDisplay;
    if(!tokenInValue || parseFloat(tokenInValue) === 0) {
        priceDisplay = (<></>);
    } else if(priceShowInvert){
        priceDisplay = (<>{`1 ${tokenOutInfo.symbol} = ${priceInvert} ${tokenInInfo.symbol}`}</>)
    } else {
        priceDisplay = (<>{`1 ${tokenInInfo.symbol} = ${price} ${tokenOutInfo.symbol}`}</>)
    }

    const tradePathDisplay = tradePath.map((e, i) =>
        i > 0
            ? (<Center key={i}><Icon as={IoChevronForward} />{e}</Center>)
            : (<Center key={i}>{e}</Center>)
    )

    return (
        <Center bg="gray.600" w="100%" pt="60px">
            <Box borderRadius="10px" padding="4px 10px" bg="black" color="white" minW="400px" minH="100px">
                {/* title, setting button */}
                <Flex justify="space-between">
                    <Center>Swap</Center>
                    {/* settings button */}
                    <Center>
                        <Popover placement="bottom-end">
                            <PopoverTrigger>
                                <IconButton
                                aria-label="swap settings"
                                icon={<SettingsIcon />}
                                size="sm"
                                variant="unstyled"
                            />
                            </PopoverTrigger>
                            <PopoverContent bg="rgb(45, 55, 72)" width="300px">
                                {/* <PopoverArrow /> */}
                                {/* <PopoverCloseButton /> */}
                                <PopoverHeader>Settings</PopoverHeader>
                                <PopoverBody>
                                    <Text>Slippage tolerance</Text>
                                    <Box h="3px"></Box>
                                    <Box>
                                        <InputGroup size="sm">
                                            <NumberInput value={slippageTolerance} onChange={onSlippageToleranceValueChange} placeholder="0.5" />
                                            <InputRightElement children="%" />
                                        </InputGroup>
                                    </Box>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
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
                        onChange={setTokenInValue}
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
                        onClick={tokenInvert}
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
                        onChange={setTokenOutValue}
                        onSelectToken={onTokenOutSelect}
                        isReadOnly={true}
                    />
                </Box>
                <Box h="10px"></Box>
                {/* Route choose */}
                {/* <Box>
                    <Flex>{`Route choose(not implemented)`}</Flex>
                    <SwapChoice title="Uniswap V2" minimumReceived="0.241368" selected={true} />
                    <SwapChoice title="1inch" minimumReceived="0.240792" />
                </Box> */}
                {/* price */}
                <Flex justify="space-between">
                    <Center>Price</Center>
                    <Center>
                        {priceDisplay}
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
                {buttons}
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