import React, { useState } from "react";
import { Box, Button, Drawer } from "@chakra-ui/react";
import SwapTest from "./SwapTest";

const TestPanel = () => {
    const [isSwapTestOpen, setSwapTestOpen] = useState(false);
    return (
        <>
            <SwapTest isOpen={isSwapTestOpen} onClose={() => setSwapTestOpen(false)} />
            <Box position="fixed" right="10px" bottom="10px" zIndex="9999">
                <Button colorScheme="teal" onClick={() => setSwapTestOpen(true)}>SwapTest</Button>
            </Box>
        </>
    )
};

export default TestPanel;