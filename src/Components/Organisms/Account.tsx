import React from 'react'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'

const Account = ({ navigation, text, path, textTwo }) => {
    return (
        <Container padd="7px" width="90%" justify={path == "Register" ? "space-between" : "flex-end"}>
            <Text onPress={() => navigation.navigate(path)} color={colors.blue} >{textTwo}</Text>
            <Text onPress={() => navigation.navigate(path)} color={colors.blue} >{text}</Text>
        </Container>
    )
}

export default Account
