import React from 'react';
import styled, { css } from '@emotion/native'
import { colors } from '@Utils/Color/colors';

const Input = styled.TextInput(({ width }: any) => `
    margin:5px;
    width:${width || "90%"};
    height: 50px;
    padding:2px;
    paddingLeft: 15px;
    border: 2px solid ${colors.border};
    border-radius: 3px;
`)


// const Input = ({ width, placeholder, onPress }: any) => {
//     return (
//         <InputAtom onKeyPress={onPress()} style={css`width:${width || "90%"}`} placeholder={placeholder || "Type here"} />
//     )
// }

export default Input;
