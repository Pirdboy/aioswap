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
import { useAccountContext } from "../../contexts/Account"
import useBalance  from "../../hooks/useBalance";
import useChainId from "../../hooks/useChainId";
import {ETH} from "../../constants/TokenList";

function clippedAddress(addr) {
    return addr && addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
}

const chainIdList = {
    "1" : "Ethereum",
    "31337": "Hardhat"
}

const Account = () => {
    const { account, connect, disconnect } = useAccountContext();
    const chainId2 = useChainId();
    const { balance } = useBalance(ETH, account);
    const height = "36px";

    return (
        <Center justifyContent="space-between">
            {/* network choose(暂时先只支持hardhat) */}
            <Box>
                <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="black" color="white" >
                    {`network: ${chainIdList[chainId2]}`}
                </Center>
            </Box>
            <Box w="5px"></Box>
            {/* Account Info */}
            {
                account ? (
                    <>
                        <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="black" color="white" >{`${balance.toString()} ETH`}</Center>
                        <Box w="5px"></Box>
                        <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="gray" color="white">{clippedAddress(account)}</Center>
                        <Box w="5px"></Box>
                        <Button h={height} colorScheme='yellow' size='sm' onClick={disconnect}>Disconnect</Button>
                    </>
                ) : (
                    <>
                        <Button colorScheme='blue' size='sm' onClick={connect}>Connect Wallet</Button>
                    </>
                )
            }
        </Center>
    )
};

export default Account;