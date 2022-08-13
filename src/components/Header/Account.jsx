import React, { useState } from "react";
import { ChevronDownIcon, BellIcon, UpDownIcon } from '@chakra-ui/icons';
import {
    Icon,
    Flex,
    Box,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button
} from '@chakra-ui/react';

const NetworkChoose = () => {
    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Ethereum
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
    )
};

const AccountInfo = ({
    balance,
    currencySymbol,
    address
}) => {
    const defaultBalance = '0';
    const defaultCurrencySymbol = 'ETH';
    
    const clippedAddress = addr => {
        return addr.slice(0,6) + '...' + addr.slice(addr.length-4,addr.length);
    };
    const defaultAddress = clippedAddress('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
    // 两个椭圆重叠的效果，实际是有一个外层div，然后内部左边是纯文字，右边是一个按钮或者div
    return (
        <>
            <Center bg="black" color="white" h="100%">{defaultBalance} {defaultCurrencySymbol}</Center>
            <Center bg="gray" color="white" pl="2px" maxW="120px" h="100%" >{defaultAddress}</Center>
        </>
    )
};

const LogoutButton = () => {
    return (
        <Button colorScheme='yellow' size='sm'>Logout</Button>
    )
};

const ConnectWalletButton = () => {
    return (
        <Button colorScheme='blue' size='sm'>Connect Wallet</Button>
    )
};


const Account = ({
    address,
    ethersProvider
}) => {
    const currencySymbol = 'ETH';
    const [userBalance, setUserBalance] = useState('0');

    return (
        <Center justifyContent="space-between">
            <NetworkChoose />
            <AccountInfo balance={userBalance} currencySymbol={currencySymbol} address={address} />
            <LogoutButton />
        </Center>
    )
};  


export default Account;