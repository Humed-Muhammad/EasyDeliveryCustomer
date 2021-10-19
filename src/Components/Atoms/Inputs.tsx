import React from 'react';
import styled, { css } from '@emotion/native'
import { colors } from '@Utils/Color/colors';

const InputAtom = styled.TextInput`
    margin:5px;
    height: 50px;
    padding:2px;
    paddingLeft: 15px;
    border: 2px solid ${colors.border};
    border-radius: 3px;
`


const Input = ({ width, placeholder }: any) => {
    return (
        <InputAtom style={css`width:${width || "90%"}`} placeholder={placeholder || "Type here"} />
    )
}

export default Input;
