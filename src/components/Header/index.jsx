import React from "react";
import { Flex } from '@chakra-ui/react';

import Logo from "./Logo";
import Account from "./Account";


const Header = () => {
    return (
        <Flex pl="15px" pt="4px" pr="15px" justify="space-between">
            <Logo />
            <Account />
        </Flex>
    )
}

export default Header;