import React from 'react';
import styled, { css } from '@emotion/native'
import { colors } from '@Utils/Color/colors';

const Input = styled.TextInput(({ width, height }: any) => `
    margin:5px;
    width:${width || "90%"};
    height: ${height || "60px"};
    padding:2px;
    paddingLeft: 15px;
    border: 2px solid ${colors.primary};
    border-radius: 3px;
`)




export default Input;
