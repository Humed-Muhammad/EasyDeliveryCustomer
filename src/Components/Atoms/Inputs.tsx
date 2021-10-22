import React from 'react';
import styled, { css } from '@emotion/native'
import { colors } from '@Utils/Color/colors';

const Input = styled.TextInput(({ width, height, radius }: any) => `
    margin:5px;
    width:${width || "90%"};
    height: ${height || "55px"};
    padding:2px;
    paddingLeft: 15px;
    border: 2px solid ${colors.secondary};
    border-radius: ${radius || "10px"};
    background-color: ${colors.white}
`)




export default Input;
