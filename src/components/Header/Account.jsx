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
import { checkIfConnectMetaMask, connectMetaMask } from '../../utils/EthersWrap';
import { useAccountContext } from "../../contexts/Account"
import useBalance  from "../../hooks/useBalance";
import {ETH} from "../../constants/TokenList";

function clippedAddress(addr) {
    return addr && addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
}

const Account = () => {
    const { address, isConnected, chainId, onConnected, onDisconnected } = useAccountContext();
    const { balance } = useBalance(ETH, address, isConnected);

    const connectWalletClicked = async (e) => {
        e.preventDefault();
        console.log('connectWalletClicked');
        try {
            const r = await connectMetaMask();
            onConnected(r.address, r.chainId);
        } catch (error) {
            console.log('error', error);
        }
    };
    const disconnectClicked = (e) => {
        e.preventDefault();
        onDisconnected();
    };

    useEffect(() => {
        const checkConnect = async () => {
            try {
                const r = await checkIfConnectMetaMask();
                onConnected(r.address, r.chainId);
            } catch (error) {
                console.log(error);
            }
        }
        checkConnect();
    }, []);

    const height = "36px";

    return (
        <Center justifyContent="space-between">
            {/* network choose(暂时先只支持hardhat) */}
            <Box>
                <Menu>
                    <MenuButton as={Button} h={height} rightIcon={<ChevronDownIcon />}>
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
            <Box w="5px"></Box>
            {/* Account Info */}
            {
                isConnected ? (
                    <>
                        <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="black" color="white" >{`${balance.toString()} ETH`}</Center>
                        <Box w="5px"></Box>
                        <Center h={height} pl="10px" pr="10px" borderRadius="10px" bg="gray" color="white">{clippedAddress(address)}</Center>
                        <Box w="5px"></Box>
                        <Button h={height} colorScheme='yellow' size='sm' onClick={disconnectClicked}>Disconnect</Button>
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