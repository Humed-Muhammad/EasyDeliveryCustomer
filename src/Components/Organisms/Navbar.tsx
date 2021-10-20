import React from 'react'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'
import { IconMenu } from '@Components/Atoms/Icons'
import Button from '@Components/Atoms/Button'

const Navbar = (props: any) => {
    return (
        <Container width="90%" justify="space-between" bg={colors.white} >
            <Button onPress={() => props.navigation.openDrawer()}>
                <IconMenu />
            </Button>
            <Text color={colors.gray} >{props.title}</Text>
        </Container>
    )
}

export default Navbar
