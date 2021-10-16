import React from 'react';
import styled,{css} from '@emotion/native'
import { colors } from '@Utils/Color/colors';

const InputAtom = styled.TextInput`
    margin:5px;
    height: 50px;
    padding:2px;
    paddingLeft: 15px;
    border: 2px solid ${colors.light};
    border-radius: 3px;
`
    

const Input = (props:any) => {
    return (
        <InputAtom style={css`width:${props.width}`} placeholder={props.placeholder} />
    )
}

export default Input;
