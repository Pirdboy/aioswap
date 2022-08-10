import React from "react";
import {GiShamrock} from 'react-icons/gi';
import {Icon, Flex, Box, Spacer,Center,Text} from '@chakra-ui/react';

const Logo = ({className}) => {
    return (
        <Flex color="blue.500" maxW="160px" h="38px">
            <Center>
                <Icon as={GiShamrock} boxSize="2em" />
                <Box pl={1} fontSize="1.25em">AIOSWAP</Box>
            </Center>
            {/* <Center><Icon as={GiShamrock} boxSize="2em" /></Center>
            <Center pl={1} fontSize="1.25em">AIOSWAP</Center> */}
        </Flex>
    )
};

export default Logo;