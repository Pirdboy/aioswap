import React, {useState} from "react";
import "./swap.css";
import {
    Input,
    Box,
    Button,
    ButtonGroup,
    Select,
    Flex
} from '@chakra-ui/react'

const Swap = () => {
    const [token0, setToken0] = useState("DAI222");
    console.log("[debug] token0", token0);
    const handleSelectChange = event => {
        console.log("[debug] handleSelectChange",event.target.value);
        setToken0(event.target.value);
    };
    return (
        <Box>
            <p>from</p>
            <Flex>
                <Input placeholder="0.0"/>
                <Select 
                value="HHHHH"
                    onChange={handleSelectChange}>
                    <option value='DAI'>DAI</option>
                    <option value='ETH'>ETH</option>
                </Select>
            </Flex>
            <p>to</p>
            <Flex>
                <Input placeholder="0.0" />
                <Select value="default">
                    <option value='DAI'>DAI</option>
                    <option value='ETH'>ETH</option>
                </Select>
            </Flex>
            <p>Price:  1 ETH = 1651 DAI</p>
            <ButtonGroup gap="3">
                <Button colorScheme="blue">Approve</Button>
                <Button colorScheme="blue">Swap</Button>
            </ButtonGroup>
            <p>Minimum Received: 0.241891 DAI</p>
            <p>{"Router DAI > WETH"}</p>
        </Box>
    );
};

export default Swap;
