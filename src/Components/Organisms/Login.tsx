import React from 'react'
import Button from '@Components/Atoms/Button'
import Input from '@Components/Atoms/Inputs'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'

const Login = ({ navigation }: any) => {
    return (
        <Container direction="column" justify="center" bg={colors.white} height="100%">
            <Text fontWeight="bold" fontSize="25px">Login</Text>
            <Input width="90%" placeholder="Email / Phone Number" />
            <Input width="90%" placeholder="Password" />
            <Container width="90%" justify="flex-end">
                <Text onPress={() => navigation.navigate("Register")} color={colors.blue} >I don't have account?</Text>
            </Container>
            <Button onPress={() => navigation.navigate("Home")} width="90%" text="Login" />
        </Container>
    )
}

export default Login
