import React, { useEffect, useState, useCallback } from "react";
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
import { UNISWAP_V2_NAME, SUSHISWAP_NAME } from "../../constants/DexName";
import { UNISWAP_V2_ROUTER02_ADDRESS } from "../../constants/Uniswap";
import { SUSHISWAP_ROUTER_ADDRESS } from "../../constants/Sushiswap";
import TokenBalance, {TokenBalanceZero} from "../../utils/TokenBalance";
import { useAccountContext } from "../../contexts/Account";
import useBestSwapTrades from "../../hooks/useBestSwapTrades";
import useBalance from "../../hooks/useBalance";
import useSwapAllowances from "../../hooks/useSwapAllowances";
import { approveERC20 } from "../../utils/EthersWrap";


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
    // ----------------- hooks -----------------
    const { address, chainId, isConnected } = useAccountContext();
    const [slippageTolerance, setSlippageTolerance] = useState('');
    const [tokenIn, setTokenIn] = useState(DefaultTokenIn);
    const [tokenInValue, setTokenInValue] = useState('');
    const {balance: tokenInBalance} = useBalance(tokenIn, address, isConnected);
    const [tokenOut, setTokenOut] = useState(DefaultTokenOut);
    const {balance: tokenOutBalance} = useBalance(tokenOut, address, isConnected);
    // const [tokenInAllowance, setTokenInAllowance] = useState(TokenBalanceZero);
    // const [forceUpdateAllowance, setForceUpdateAllowance] = useState(false);
    const [selectedTradeIndex, setSelectedTradeIndex] = useState(0);
    const cb = useCallback(()=>{
        console.log('setSelectedTradeIndex(0)');
        setSelectedTradeIndex(0);
    },[]);

    const { bestTrades, loading: loadingTrades } = useBestSwapTrades(tokenIn, tokenInValue, tokenOut, slippageTolerance || "0.5", cb);
    
    const {allowances, setForceUpdateAllowance} = useSwapAllowances(tokenIn, isConnected, address);

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

    // ----------------- handler -----------------
    const onTokenInvertClick = e => {
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
        setTokenInValue('');
    };
    const onTokenOutSelect = (tokenObj) => {
        if (!tokenObj || !tokenObj.symbol || tokenObj.symbol === tokenOut.symbol) {
            return;
        }
        console.log('onTokenOutSelect', tokenObj);
        setTokenOut(tokenObj);
        setTokenInValue('');
    };

    const onApproveClicked = async (e) => {
        // e.preventDefault();
        console.log('onApproveClicked');
        let spender;
        if(bestTrades[selectedTradeIndex].dexName === UNISWAP_V2_NAME) {
            spender = UNISWAP_V2_ROUTER02_ADDRESS;
        } else if(bestTrades[selectedTradeIndex].dexName === SUSHISWAP_NAME) {
            spender = SUSHISWAP_ROUTER_ADDRESS;
        }
        await approveERC20(tokenIn, tokenInValue, spender);
        setForceUpdateAllowance(true);
    };

    const onSwapClicked = async (e) => {
        // e.preventDefault();
        console.log('onSwapClicked');
        // await swapToken(trade, tokenIn, tokenInValue, tokenOut, slippageTolerance || '0.5');
    }

    // ----------------- Components -----------------
    let tradesDisplay = null;
    let tokenOutValue = "";
    let tradeDetailDisplay = null;
    let selectedTrade = null;
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
                <Box h="8px"></Box>
                {bestTrades.map((e, i) =>
                    <SwapChoice key={i} title={e.dexName} amountOut={e.amountOut} selected={i === selectedTradeIndex} onClick={() => setSelectedTradeIndex(i)} />
                )}
            </Box>
        )
        selectedTrade = bestTrades[selectedTradeIndex];
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
   
    let buttonDisplay = null;
    const tokenInAmount = TokenBalance.fromDisplayAmount(tokenInValue || '0', tokenIn.decimals);
    if(tokenInAmount.eq(TokenBalanceZero)) {
        buttonDisplay = (
            <Flex>
                <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'>Enter Amount</Button>
            </Flex>
        );
    } else if(loadingTrades || !selectedTrade) {
        buttonDisplay = null;
    } else if (tokenInAmount.gt(tokenInBalance)) {
        buttonDisplay = (
            <Flex>
                <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'> Insufficient {tokenIn.symbol} balance</Button>
            </Flex>
        );
    } else if(tokenIn.symbol === 'ETH' || tokenInAmount.lte(allowances[selectedTrade.dexName])) {
        buttonDisplay = (
            <Center>
                <Button onClick={onSwapClicked} colorScheme='blue'>Swap</Button>
            </Center>
        );
    } else {
        buttonDisplay = (
            <Center>
                <Button onClick={onApproveClicked} colorScheme='blue'>{`Approve ${tokenIn.symbol} Token`}</Button>
                <Box w="10px"></Box>
                <Button isDisabled={true} colorScheme='whiteAlpha'>Swap</Button>
            </Center>
        );
    }

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
                        onClick={onTokenInvertClick}
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
                {/* Trade Detail */}
                <Box h="8px"></Box>
                {tradeDetailDisplay}
                {/* buttons */}
                <Box h="12px"></Box>
                <Center>
                    {buttonDisplay}
                </Center>
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