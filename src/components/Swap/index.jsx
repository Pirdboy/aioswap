import React, { useEffect, useState } from "react";
import { Box, Flex, Center, IconButton, Button, Divider, Icon, Text, InputGroup, InputRightElement, Spinner } from '@chakra-ui/react';
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
} from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { IoRepeat, IoChevronForward } from 'react-icons/io5';

import { ModalTokenSelect } from "../Modal";
import NumberInput from "../NumberInput";
import { DefaultTokenIn, DefaultTokenOut } from "../../constants/TokenList";
import { getERC20Balance, getBalance, getERC20AllowanceOfRouter, approveRouter } from "../../utils/EthersWrap";
import TokenBalance, { TokenBalanceZero } from "../../utils/TokenBalance";
import { getBestTradeExactIn, swapToken } from "../../utils/UniswapV2Wrap";
import { useAccountContext } from "../../contexts/Account";

import useBestSwapTrades from "../../hooks/useBestSwapTrades";

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
    amountOut,
    selected,
    ...props
}) => {
    const borderStyle = selected ? "1px solid rgb(47,138,245)" : "1px solid rgb(55,68,90)";
    return (
        <Flex padding="5px" justify="space-between" borderRadius="10px" border={borderStyle} {...props}>
            <Center>{title}</Center>
            <Center>{amountOut}</Center>
        </Flex>
    )
};

const Swap = () => {
    const { address, chainId, isConnected } = useAccountContext();

    const [tokenIn, setTokenIn] = useState(DefaultTokenIn);
    const [tokenInBalance, setTokenInBalance] = useState(TokenBalanceZero);
    const [tokenInValue, setTokenInValue] = useState('');

    const [tokenOut, setTokenOut] = useState(DefaultTokenOut);
    const [tokenOutBalance, setTokenOutBalance] = useState(TokenBalanceZero);

    // const [tokenInAllowance, setTokenInAllowance] = useState(TokenBalanceZero);
    // const [forceUpdateAllowance, setForceUpdateAllowance] = useState(false);

    const [slippageTolerance, setSlippageTolerance] = useState('');

    // const [trade, setTrade] = useState();
    // const [price, setPrice] = useState('');
    // const [priceInvert, setPriceInvert] = useState('');
    // const [minimumReceived, setMinimumReceived] = useState('');
    // const [tradePath, setTradePath] = useState([]);

    const [priceShowInvert, setPriceShowInvert] = useState(false);

    const { bestTrades, loading: loadingTrades } = useBestSwapTrades(tokenIn, tokenInValue, tokenOut, slippageTolerance || "0.5");
    const [selectedTradeIndex, setSelectedTradeIndex] = useState(0);
    let tradesDisplayList = bestTrades?.map((e, i) =>
        <SwapChoice key={i} title={e.dexName} amountOut={e.amountOut} selected={i == selectedTradeIndex} onClick={() => setSelectedTradeIndex(i)} />
    );
    let selectedTrade = bestTrades?.at(selectedTradeIndex);

    let tradesDisplay = null;
    let tokenOutValue = "";
    let tradeDetailDisplay = null;
    if (loadingTrades) {
        tradesDisplay = (
            <Flex>
                <Spinner />
                <Box w="4px"></Box>
                <Box>正在获取最优兑换方案...</Box>
            </Flex>
        )
    } else if (bestTrades) {
        tradesDisplay = (
            <Box>
                <Box>{`兑换方案`}</Box>
                <Box h="4px"></Box>
                {bestTrades.map((e, i) =>
                    <SwapChoice key={i} title={e.dexName} amountOut={e.amountOut} selected={i == selectedTradeIndex} onClick={() => setSelectedTradeIndex(i)} />
                )}
            </Box>
        )
        tokenOutValue = bestTrades[selectedTradeIndex].amountOut;
        tradeDetailDisplay = (
            <Box>
                <Flex alignItems="center">
                    {`1 ${tokenIn.symbol} = ${bestTrades[selectedTradeIndex].price} ${tokenOut.symbol}`}
                </Flex>
                <Flex alignItems="center">
                    {`1 ${tokenOut.symbol} = ${bestTrades[selectedTradeIndex].priceInvert} ${tokenIn.symbol}`}
                </Flex>
                <Flex justify="space-between">
                    <Center>{`Minimum received`}</Center>
                    <Center>{`${bestTrades[selectedTradeIndex].minimumReceived} ${tokenOut.symbol}`}</Center>
                </Flex>
                <Flex justify="space-between">
                    <Center>Route</Center>
                    <Center>{bestTrades[selectedTradeIndex].path.join(' > ')}</Center>
                </Flex>
            </Box>
        )
    }




    const clearBothInput = () => {
        setTokenInValue('');
    };
    // const setTradeInfo = (t) => {
    //     setTrade(t.trade);
    //     setPrice(t.price);
    //     setPriceInvert(t.priceInvert);
    //     setMinimumReceived(t.minimumReceived);
    //     setTokenOutValue(t.amountOut);
    //     setTradePath(t.path);
    // };
    // const clearTradeInfo = () => {
    //     setTrade(null);
    //     setPrice('');
    //     setPriceInvert('');
    //     setMinimumReceived('');
    //     setTokenOutValue('');
    //     setTradePath([]);
    // };
    const tokenInvert = e => {
        e.preventDefault();
        let tIn = tokenIn;
        let tOut = tokenOut;
        setTokenIn(tOut);
        setTokenOut(tIn);
    };
    const onTokenInSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenIn.symbol) {
            return;
        }
        console.log('onTokenInSelect', tokenObj);
        setTokenIn(tokenObj);
        clearBothInput();
    };
    const onTokenOutSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenOut.symbol) {
            return;
        }
        console.log('onTokenOutSelect', tokenObj);
        setTokenOut(tokenObj);
        clearBothInput();
    };
    // const onApproveClicked = async (e) => {
    //     e.preventDefault();
    //     console.log('onApproveClicked');
    //     await approveRouter(tokenIn, tokenInValue);
    //     setForceUpdateAllowance(true);
    // };

    // const onSwapClicked = async (e) => {
    //     e.preventDefault();
    //     console.log('onSwapClicked');
    //     await swapToken(trade, tokenIn, tokenInValue, tokenOut, slippageTolerance || '0.5');
    // }

    // fetchTokenInBalance
    // useEffect(() => {
    //     const fetchTokenInBalance = async () => {
    //         if (!isConnected) {
    //             setTokenInBalance(TokenBalanceZero);
    //             return;
    //         }
    //         let balance;
    //         if (tokenIn.symbol === 'ETH') {
    //             balance = await getBalance(address);
    //         } else {
    //             balance = await getERC20Balance(address, tokenIn);
    //         }
    //         setTokenInBalance(balance);
    //     };
    //     fetchTokenInBalance();
    // }, [tokenIn, address, isConnected]);

    // fetchTokenOutBalance
    // useEffect(() => {
    //     const fetchTokenOutBalance = async () => {
    //         if (!isConnected) {
    //             setTokenOutBalance(TokenBalanceZero);
    //             return;
    //         }
    //         let balance;
    //         if (tokenOut.symbol === 'ETH') {
    //             balance = await getBalance(address);
    //         } else {
    //             balance = await getERC20Balance(address, tokenOut);
    //         }
    //         setTokenOutBalance(balance);
    //     };
    //     fetchTokenOutBalance();
    // }, [tokenOut, address, isConnected]);

    // fetchTokenInAlowance
    // useEffect(() => {
    //     const fetchTokenInAlowance = async () => {
    //         if (!isConnected) {
    //             return;
    //         }
    //         if (tokenIn.symbol === 'ETH') {
    //             return;
    //         }
    //         const allowance = await getERC20AllowanceOfRouter(address, tokenIn);
    //         console.log('fetchTokenInAlowance allowance', allowance.toString());
    //         setTokenInAllowance(allowance);
    //     };
    //     fetchTokenInAlowance();
    // }, [tokenIn, isConnected, address])

    // forceUpdateTokenInAllowance
    // useEffect(() => {
    //     const fetchTokenInAllowance = async () => {
    //         if (!forceUpdateAllowance) {
    //             return;
    //         }
    //         if (!isConnected) {
    //             return;
    //         }
    //         if (tokenIn.symbol === 'ETH') {
    //             return;
    //         }
    //         const allowance = await getERC20AllowanceOfRouter(address, tokenIn);
    //         console.log('fetchTokenInAlowance(forced) allowance', allowance.toString());
    //         setTokenInAllowance(allowance);
    //         setForceUpdateAllowance(false);
    //     };
    //     fetchTokenInAllowance();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [forceUpdateAllowance])

    // let buttonDisplay = 0;
    // {
    //     const tokenInValueBalance = TokenBalance.fromDisplayAmount(tokenInValue || '0', tokenIn.decimals);
    //     if (tokenInValueBalance.eq(TokenBalanceZero)) {
    //         buttonDisplay = 1;   // input zero: Enter Amount
    //     } else if (tokenInValueBalance.gt(tokenInBalance)) {
    //         buttonDisplay = 2;   // Insufficient Balance
    //     } else if (tokenIn.symbol === 'ETH') {
    //         buttonDisplay = 3;  // swap button
    //     } else {
    //         if (tokenInValueBalance.gt(tokenInAllowance)) {
    //             buttonDisplay = 4; // approve and disabled swap
    //         } else {
    //             buttonDisplay = 3; // swap button
    //         }
    //     }
    // }

    // let buttons;
    // if (buttonDisplay === 1) {
    //     buttons = (
    //         <>
    //             <Flex>
    //                 <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'>Enter Amount</Button>
    //             </Flex>
    //         </>
    //     );
    // } else if (buttonDisplay === 2) {
    //     buttons = (
    //         <>
    //             <Flex>
    //                 <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'> Insufficient {tokenIn.symbol} balance</Button>
    //             </Flex>
    //         </>
    //     );
    // } else if (buttonDisplay === 3) {
    //     buttons = (
    //         <>
    //             <Center>
    //                 <Button onClick={onSwapClicked} colorScheme='blue'>Swap</Button>
    //             </Center>
    //         </>
    //     );
    // } else if (buttonDisplay === 4) {
    //     buttons = (
    //         <>
    //             <Center>
    //                 <Button onClick={onApproveClicked} colorScheme='blue'>{`Approve ${tokenIn.symbol} Token`}</Button>
    //                 <Box w="10px"></Box>
    //                 <Button isDisabled={true} colorScheme='whiteAlpha'>Swap</Button>
    //             </Center>
    //         </>
    //     );
    // }

    // let priceDisplay;
    // if(!tokenInValue || parseFloat(tokenInValue) === 0) {
    //     priceDisplay = (<></>);
    // } else if(priceShowInvert){
    //     priceDisplay = (<>{`1 ${tokenOut.symbol} = ${priceInvert} ${tokenIn.symbol}`}</>)
    // } else {
    //     priceDisplay = (<>{`1 ${tokenIn.symbol} = ${price} ${tokenOut.symbol}`}</>)
    // }

    // const tradePathDisplay = tradePath.map((e, i) =>
    //     i > 0
    //         ? (<Center key={i}><Icon as={IoChevronForward} />{e}</Center>)
    //         : (<Center key={i}>{e}</Center>)
    // )

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
                                            <NumberInput value={slippageTolerance} onChange={setSlippageTolerance} placeholder="0.5" />
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
                        tokenSymbol={tokenIn.symbol}
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
                        tokenSymbol={tokenOut.symbol}
                        value={tokenOutValue}
                        onSelectToken={onTokenOutSelect}
                        isReadOnly={true}
                    />
                </Box>
                <Box h="10px"></Box>
                {/* Best Trades */}
                {tradesDisplay}
                {/* buttons */}
                <Box h="12px"></Box>
                <Center>
                    <Button colorScheme="teal">button占位</Button>
                </Center>
                <Box h="16px"></Box>
                {tradeDetailDisplay}

                {/* price */}
                {/* <Flex justify="space-between">
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
                </Flex> */}
                {/* approve, swap, insufficient button */}
                {/* {buttons} */}
                {/* trade estimate display */}
                {/* <Box>
                    <Flex justify="space-between">
                        <Center>Minimum received</Center>
                        <Center>{`${minimumReceived} ${tokenOut.symbol}`}</Center>
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
                </Box> */}
            </Box>
        </Center>
    )
};

export default Swap;