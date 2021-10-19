import React from 'react'
import Container from '@Components/Atoms/Container'
import Text from '@Components/Atoms/Text'
import { colors } from '@Utils/Color/colors'

const Account = ({ navigation, text }) => {
    return (
        <Container width="90%" justify="flex-end">
            <Text onPress={() => navigation.navigate("Register")} color={colors.blue} >{text}</Text>
        </Container>
    )
}

export default Account
