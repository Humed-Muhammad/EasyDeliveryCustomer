import React from 'react'
import Button from '@Components/Atoms/Button'
import Input from '@Components/Atoms/Inputs'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'

const Register = () => {
    return (
        <Container direction="column" justify="flex-start" bg={colors.white} height="80%">
            <Text fontWeight="bold" fontSize="25px">Login</Text>
            <Input width="90%" placeholder="Email / Phone Number" />
            <Input width="90%" placeholder="Password" />
            <Button text="Login"/>
        </Container>
    )
}

export default Register
