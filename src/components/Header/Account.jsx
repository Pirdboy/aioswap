import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button
} from '@chakra-ui/react';
import { useWeb3ModalContext } from "../../contexts/Web3Modal";
import { useEthersAppContext } from 'eth-hooks/context';
import { useBalance } from "eth-hooks";
import { defaultUpdateOptions } from "eth-hooks/models";
import TokenBalance from "../../utils/TokenBalance";

// 临时用
const chainIdList = {
    '1': 'Ethereum',
    '31337': 'Hardhat',
};

function clippedAddress(addr) {
    return addr && addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
}

const Account = () => {
    const { connect, disconnect } = useWeb3ModalContext();
    const { account, chainId } = useEthersAppContext();
    const [balance] = useBalance(account, defaultUpdateOptions());
    // console.log('Account chainId', chainId);  // 十进制数字,比如31337

    const height = "36px";
    let currentNetworkName = chainId ? chainIdList[chainId] : 'Ethereum';
    let networkDisplay =
        <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="rgb(226,232,240)" color="blackAlpha.800" >
            {currentNetworkName}
        </Center>

    let accountDisplay;
    if (!account) {
        accountDisplay =
            <>
                <Button colorScheme='blue' size='sm' onClick={connect}>Connect Wallet</Button>
            </>
    } else {
        let balanceStr = TokenBalance.fromRawAmount(balance, 'ether').toString();
        let addressStr = clippedAddress(account);
        accountDisplay =
            <>
                <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="black" color="white" >{`${balanceStr} ETH`}</Center>
                <Box w="5px"></Box>
                <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="gray" color="white">{addressStr}</Center>
                <Box w="5px"></Box>
                <Button h={height} colorScheme='yellow' size='sm' onClick={disconnect}>Disconnect</Button>
            </>
    }
    return (
        <Center justifyContent="space-between">
            {/* network choose(暂时不支持切换) */}
            {/* <Box>
                <Menu>
                    <MenuButton as={Button} h={height} rightIcon={<ChevronDownIcon />}>
                        {currentNetworkName}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <span>Ethereum</span>
                        </MenuItem>
                        <MenuItem>
                            <span>Hardhat</span>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box> */}
            {networkDisplay}
            <Box w="5px"></Box>
            {accountDisplay}
        </Center>
    )
};

export default Account;