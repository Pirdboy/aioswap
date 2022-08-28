import React, { useState } from "react";
import {
    Divider,
    Flex,
    Box,
    Wrap,
    Button,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';

import { TokenList, RecommandedTokenList } from "../../constants/TokenList";

const ModalWarning = ({ isOpen, title, onClose, children }) => {
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="rgb(45,55,72)" color="rgb(227,232,238)">
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
};

/*
 * @param isOpen boolean
 * @param onSelectToken function(tokenObj)
 */
const ModalTokenSelect = ({ isOpen, onSelectToken, disabledToken }) => {
    const onClose = t => {
        onSelectToken && onSelectToken(t);
    };
    const [searchText, setSearchText] = useState('');
    const handleInputChange = e => {
        e.preventDefault();
        setSearchText(e.target.value);
    };
    const tokenFilter = (t, patt) => {
        if (!patt) {
            return true;
        }
        const symbol = t.symbol.toLowerCase();
        const name = t.name.toLowerCase();
        const patt2 = patt.toLowerCase();
        return symbol.indexOf(patt2) >= 0 || name.indexOf(patt2) >= 0;
    };
    const isTokenEqual = (t1, t2) => {
        if(!t1 || !t2) {
            return false;
        }
        return t1.address === t2.address;
    }

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent bg="rgb(45,55,72)" color="rgb(227,232,238)">
                <ModalHeader>Select a token</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex>
                        <Input value={searchText} onChange={handleInputChange} placeholder="Search name" />
                    </Flex>
                    <Flex h='20px'></Flex>
                    <Flex>
                        <Wrap spacing="10px">
                            {RecommandedTokenList.map((e, i) => (
                                <Button key={i} isDisabled={isTokenEqual(e, disabledToken)} variant="outline" onClick={() => onClose(e)}>{e.symbol}</Button>
                            ))}
                        </Wrap>
                    </Flex>
                    <Flex h='20px'></Flex>
                    <Divider />
                    <Flex h='10px'></Flex>
                    <Box h="300px" overflow="scroll">
                        {TokenList.filter((e) => tokenFilter(e, searchText)).map((e, i) => 
                            isTokenEqual(e, disabledToken) ? (
                                <Box opacity="0.25" border="1px solid white" borderRadius="5px" key={i}>
                                    <Box>{e.symbol}</Box>
                                    <Box color="whiteAlpha.500">{e.name}</Box>
                                </Box>
                            ) : (
                                <Box _hover={{ bg: 'blue.600' }} border="1px solid white" borderRadius="5px" key={i} onClick={() => onClose(e)}>
                                    <Box>{e.symbol}</Box>
                                    <Box color="whiteAlpha.500">{e.name}</Box>
                                </Box>
                            )
                        )}
                    </Box>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
};

export { ModalWarning, ModalTokenSelect };