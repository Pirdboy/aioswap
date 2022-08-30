import React, { useEffect, useState, useCallback } from "react";
import { Box, Flex, Center, IconButton, Button, Divider, Icon, Text, InputGroup, InputRightElement, Spinner, useToast } from '@chakra-ui/react';
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
import TokenBalance, { TokenBalanceZero } from "../../utils/TokenBalance";
import { useAccountContext } from "../../contexts/Account";
import useBestSwapTrades from "../../hooks/useBestSwapTrades";
import useBalance from "../../hooks/useBalance";
import useSwapAllowances from "../../hooks/useSwapAllowances";
import { approveERC20 } from "../../utils/EthersWrap";
import { isWrappedToken } from "../../utils/WrappedToken";


const TokenInput = ({
    tokenSymbol,
    onSelectToken,
    disabledToken,
    ...props
}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Flex>
            <NumberInput {...props} />
            <Button colorScheme="blackAlpha" rightIcon={<ChevronDownIcon />} onClick={() => setShowModal(true)}>
                {tokenSymbol ?? 'Select Token'}
            </Button>
            <ModalTokenSelect disabledToken={disabledToken} isOpen={showModal} onSelectToken={(tokenObj) => {
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
    const { account } = useAccountContext();
    const [slippageTolerance, setSlippageTolerance] = useState('');
    const [tokenIn, setTokenIn] = useState(DefaultTokenIn);
    const [tokenInValue, setTokenInValue] = useState('');
    const { balance: tokenInBalance } = useBalance(tokenIn, account);
    const [tokenOut, setTokenOut] = useState(DefaultTokenOut);
    const { balance: tokenOutBalance } = useBalance(tokenOut, account);
    const [selectedTradeIndex, setSelectedTradeIndex] = useState(0);
    const cb = useCallback(() => {
        setSelectedTradeIndex(0);
    }, []);
    const { bestTrades, wrappedTokenTrade, loading: loadingTrades } = useBestSwapTrades(tokenIn, tokenInValue, tokenOut, slippageTolerance || "0.5", cb);
    const { allowances, setForceUpdateAllowance } = useSwapAllowances(tokenIn, account);

    const [swapLoading, setSwapLoading] = useState(false);
    const [approveLoading, setApproveLoading] = useState(false);

    const toast = useToast();
    const showSuccessToast = (message) => {
        toast({
            description: message,
            duration: 1500,
            status: 'success',
            position: 'top'
        })
    }

    // ----------------- handler -----------------
    const onTokenInvertClick = e => {
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
        console.log('onApproveClicked');
        setApproveLoading(true);
        try {
            let spender;
            if (bestTrades[selectedTradeIndex].dexName === UNISWAP_V2_NAME) {
                spender = UNISWAP_V2_ROUTER02_ADDRESS;
            } else if (bestTrades[selectedTradeIndex].dexName === SUSHISWAP_NAME) {
                spender = SUSHISWAP_ROUTER_ADDRESS;
            }
            await approveERC20(tokenIn, tokenInValue, spender);
            setForceUpdateAllowance(true);
            setApproveLoading(false);
            showSuccessToast('approve success');
        } catch (error) {
            console.log(error);
            setApproveLoading(false);
        }
    };

    const onSwapClicked = async (e) => {
        console.log('onSwapClicked');
        setSwapLoading(true);
        try {
            if (wrappedTokenTrade) {
                await wrappedTokenTrade.executeTrade();
            } else {
                // let selectedTrade = bestTrades?.at(selectedTradeIndex)
                // if (selectedTrade) {
                //     await selectedTrade.executeTrade();
                // }
                await bestTrades?.at(selectedTradeIndex)?.executeTrade();
            }
            setForceUpdateAllowance(true);
            setSwapLoading(false);
            showSuccessToast('swap success');
        } catch (error) {
            console.log(error);
            setSwapLoading(false);
        }
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
                <Box>finding best trade route...</Box>
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
    } else if (wrappedTokenTrade) {
        tokenOutValue = wrappedTokenTrade.amountOut;
    }

    let buttonDisplay = null;
    const swapButton =
        <Center>
            <Button onClick={onSwapClicked} isLoading={swapLoading} colorScheme='blue'>Swap</Button>
        </Center>

    const tokenInAmount = TokenBalance.fromDisplayAmount(tokenInValue || '0', tokenIn.decimals);
    if (tokenInAmount.eq(TokenBalanceZero)) {
        buttonDisplay = (
            <Flex>
                <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'>Enter Amount</Button>
            </Flex>
        );
    } else if (tokenInAmount.gt(tokenInBalance)) {
        buttonDisplay = (
            <Flex>
                <Button isDisabled={true} width="100%" color="white" colorScheme='whiteAlpha'> Insufficient {tokenIn.symbol} balance</Button>
            </Flex>
        );
    } else if (isWrappedToken(tokenIn, tokenOut)) {
        buttonDisplay = swapButton;
    } else if (loadingTrades || !selectedTrade) {
        buttonDisplay = null;
    } else if (tokenIn.symbol === 'ETH' || tokenInAmount.lte(allowances[selectedTrade.dexName])) {
        buttonDisplay = swapButton;
    } else {
        buttonDisplay = (
            <Center>
                <Button onClick={onApproveClicked} isLoading={approveLoading} colorScheme='blue'>{`Approve ${tokenIn.symbol} Token`}</Button>
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
                        disabledToken={tokenOut}
                    />
                </Box>
                {/* token inversion button */}
                <Box h="2px"></Box>
                <Center>
                    <IconButton
                        colorScheme="gray"
                        aria-label="token inversion"
                        icon={<ArrowDownIcon />}
                        variant="ghost"
                        onClick={onTokenInvertClick}
                    />
                </Center>
                <Box h="2px"></Box>
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
                        disabledToken={tokenIn}
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