import React from "react";
import { Input } from '@chakra-ui/react';

const NumberInput = ({
    value,
    onChange,
    ...props
}) => {
    const enforceNumber = e => {
        const value = e.target.value;
        if ((value === '' || value.match(/^[0-9]+\.?[0-9]*$/)) && value.length < 16) {
            onChange && onChange(value);
        }
    };
    return (
        <>
            <Input placeholder="0.0" value={value} onChange={enforceNumber} {...props}/>
        </>
    )
};

export default NumberInput;