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

import {
    useAccount,
    useConnect,
    useBalance,
    useDisconnect
} from 'wagmi';

function clippedAddress(addr) {
    return addr && addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
}

// wagmi useBalance和useChainId有bug
// 连接和未连接的情况必须分开
const AccountNotConnected = () => {
    const { connect, connectors } = useConnect();
    return (
        <>
            <Button colorScheme='blue' size='sm' onClick={() => connect({ connector: connectors[0] })}>Connect Wallet</Button>
        </>
    )
};

const AccountConnected = () => {
    const { address, isConnected, connector } = useAccount();
    console.log("address",address,"isConnected",isConnected,"connector:",connector);

    const { data: balanceData } = useBalance({
        addressOrName: address,
    });
    const { disconnect } = useDisconnect();
    return (
        <>
            <Center bg="black" color="white" h="100%">{balanceData?.formatted} {balanceData?.symbol}</Center>
            <Center bg="gray" color="white" pl="2px" maxW="120px" h="100%" >{clippedAddress(address)}</Center>
            <Button colorScheme='yellow' size='sm' onClick={() => disconnect()}>Disconnect</Button>
        </>
    )
};

const Account = () => {
    const { isConnected } = useAccount();
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
                    <AccountConnected />
                ) : (
                    <AccountNotConnected />
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