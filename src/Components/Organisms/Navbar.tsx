import React from 'react'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'
import { IconMenu } from '@Components/Atoms/Icons'
import Button from '@Components/Atoms/Button'

const Navbar = (props: any) => {
    return (
        <Container height="55px" width="100%" justify="space-evenly" bg={colors.white} >
            <Container justify="flex-start" width="50%">
                <IconMenu onPress={() => props.navigation.openDrawer()} />
            </Container>
            <Container width="50%">
                <Text fontWeight="bold" color={colors.gray} >{props.title}</Text>
            </Container>

        </Container>
    )
}

export default Navbar
