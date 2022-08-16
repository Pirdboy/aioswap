import React from "react";
import { Input } from '@chakra-ui/react';

const NumberInput = ({
    onInputValue,
    value
}) => {
    const enforceNumber = e => {
        const value = e.target.value;
        // console.log("enforceNumber, value",value);
        if ((value === '' || value.match(/^[0-9]+\.?[0-9]*$/)) && value.length < 16) {
            console.log("enforceNumber control");
            onInputValue(value);
        }
    };
    return (
        <>
            <Input placeholder="0.0" value={value} onChange={enforceNumber} />
        </>
    )
};

export default NumberInput;