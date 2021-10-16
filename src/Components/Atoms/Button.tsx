import React from 'react';
import styled,{css} from '@emotion/native'
import {colors} from "@Utils/Color/colors"

const Text = styled.Text({
    color:"white",
})

const Pressable = styled.Pressable`
    margin:5px;
    padding:2px;
    width: 200px;
    height: 50px;
    display:flex;
    border-radius: 7px;
    justify-content: center;
    align-items:center;
    background-color: ${ colors.primary };
`
    

const Button = (props:any) => {
    return (
        <Pressable>
            <Text>{props.text}</Text>
        </Pressable>
    )
}

export default Button;
