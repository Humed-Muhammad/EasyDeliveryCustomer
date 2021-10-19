import React from 'react'
import Button from '@Components/Atoms/Button'
import Input from '@Components/Atoms/Inputs'
import Container from '@Components/Atoms/Container'
import { colors } from '@Utils/Color/colors'
import Text from '@Components/Atoms/Text'
import Account from '@Components/Organisms/Account'

const Register = ({ navigation }: any) => {
    return (
        <Container direction="column" justify="center" bg={colors.white} height="80%">
            <Text fontWeight="bold" fontSize="25px">Register</Text>
            <Input width="90%" placeholder="First Name" />
            <Input width="90%" placeholder="Last Name" />
            <Input width="90%" placeholder="Email" />
            <Input width="90%" placeholder="Phone Number" />
            <Input width="90%" placeholder="Password" />
            <Account navigation={navigation} text="I have an account." />
            <Button width="90%" text="Register" />
        </Container>
    )
}

export default Register
