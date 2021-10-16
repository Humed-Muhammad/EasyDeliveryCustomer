import React from 'react'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'

const Navbar = (props:any) => {
    return (
        <Container justify="center" bg={colors.primary} height="60px" >
           <Text color={colors.light} >{props.title}</Text>
        </Container>
    )
}

export default Navbar
