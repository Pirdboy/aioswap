import React from "react";
import {GiShamrock} from 'react-icons/gi';
import {Icon, Flex, Box, Spacer,Center,Text} from '@chakra-ui/react';

const Logo = ({className}) => {
    return (
        <Flex className={className} color="blue.500" w="160px" h="40px">
            <Center><Icon as={GiShamrock} boxSize="2em" /></Center>
            <Center pl={1} fontSize="1.25em">AIOSWAP</Center>
        </Flex>
    )
};

export default Logo;