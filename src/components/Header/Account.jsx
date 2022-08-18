import React, { useEffect, useState } from "react";
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

import {
    CheckIfConnectMetaMask,
    GetBalance,
    BalanceToString,
    Disconnect,
    ConnectMetaMask
} from '../../globals/EthersWrap';

function clippedAddress(addr) {
    return addr && addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
}

const Account = () => {
    const [isConnected, setConnected] = useState(false);
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('0');
    const [chainId, setChainId] = useState(0);
    const checkConnect = async () => {
        try {
            console.log('checkConnect');
            const r = await CheckIfConnectMetaMask();
            setConnected(true);
            setAddress(r.address);
            setChainId(r.chainId);
            const b = await GetBalance(r.address);
            setBalance(BalanceToString(b, 'ether'));
        } catch (error) {
            console.log(error);
            setConnected(false);
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
            setConnected(true);
            setAddress(r.address+'');
            setChainId(r.chainId+0);
            const b = await GetBalance(r.address);
            setBalance(BalanceToString(b, 'ether'));
        } catch (error) {
            console.log('error', error);
            setConnected(false);
        }
    };
    const disconnectClicked = () => {
        Disconnect();
        setConnected(false);
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


// const Account = () => {
//     const currencySymbol = 'ETH';
//     const [userBalance, setUserBalance] = useState('0');

//     const { address, connector, isConnected } = useAccount();
//     // const { data: ensAvatar } = useEnsAvatar({ addressOrName: address });
//     console.log("address", address);
//     console.log("useAccount.connector", connector);
//     console.log("isConnected", isConnected);
//     // console.log("ensAvatar", ensAvatar);

//     // pendingConnector表示处于连接中的Connector
//     const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
//     console.log("connect", connect);
//     console.log("isLoading", isLoading);
//     console.log("connectors[0]",connectors[0]);
//     console.log("connectors[0].ready",connectors[0]?.ready);

//     const provider = useProvider();
//     console.log('useProvider', provider);
//     console.log('useProvider getSigner', provider.getSigner());

//     const btn1 = () => connect({ connector: connectors[0] });
//     const btn2 = async () => {
//         // Connector的provider是一个代理类(Proxy)
//         const provider2 = await connectors[0]?.getProvider();
//         console.log('provider from Connector', provider2);
//         console.log('chainId from Connector', await connectors[0]?.getChainId());
//     };

//     // console.log('pendingConnector.id == connectors[0].id', pendingConnector.id == connectors[0].id);

//     return (
//         <Center justifyContent="space-between">
//             <Button onClick={btn1}>测试按钮1</Button>
//             <Button onClick={btn2}>测试按钮2</Button>
//             <Box>
//                 {connectors.map(connector => (
//                     <Box key={connector.id}>
//                         {connector.name}
//                         {connector.ready ? '(supported)':'(not supported)'}
//                     </Box>
//                 ))}
//             </Box>
//             <NetworkChoose />
//             <AccountInfo balance={userBalance} />
//             <LogoutButton />
//         </Center>
//     )
// };