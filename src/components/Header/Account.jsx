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

import {
    CheckIfConnectMetaMask,
    GetBalance,
    BalanceToString,
    ConnectMetaMask
} from '../../globals/EthersWrap';

import {
    useAccountContext
} from "../../contexts/Account"

function clippedAddress(addr) {
    return addr && addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
}

const Account = () => {
    const { address, isConnected, chainId, onConnected, onDisconnected } = useAccountContext();
    const [balance, setBalance] = useState('0');

    const checkConnect = async () => {
        try {
            console.log('checkConnect');
            const r = await CheckIfConnectMetaMask();
            onConnected(r.address, r.chainId);
            const b = await GetBalance(r.address);
            setBalance(BalanceToString(b, 'ether'));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkConnect();
    }, [])

    const connectWalletClicked = async (e) => {
        e.preventDefault();
        console.log('connectWalletClicked');
        try {
            const r = await ConnectMetaMask();
            console.log('ConnectMetaMask return', r);
            onConnected(r.address, r.chainId);
            const b = await GetBalance(r.address);
            setBalance(BalanceToString(b, 'ether'));
        } catch (error) {
            console.log('error', error);
        }
    };
    const disconnectClicked = (e) => {
        e.preventDefault();
        console.log('disconnectClicked');
        onDisconnected();
    };

    return (
        <Center justifyContent="space-between">
            {/* network choose(暂时先只支持hardhat) */}
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Hardhat
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
            </Box>
            {/* Account Info */}
            {
                isConnected ? (
                    <>
                        <Center bg="black" color="white" h="100%">{`${balance} ETH`}</Center>
                        <Center bg="gray" color="white" pl="2px" maxW="120px" h="100%" >{clippedAddress(address)}</Center>
                        <Button colorScheme='yellow' size='sm' onClick={disconnectClicked}>Disconnect</Button>
                    </>
                ) : (
                    <>
                        <Button colorScheme='blue' size='sm' onClick={connectWalletClicked}>Connect Wallet</Button>
                    </>
                )
            }
        </Center>
    )
};

export default Account;