import React from 'react'
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import Text from '@Components/Atoms/Text'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Order = () => {
    return (
        <Container position="absolute" b="0px" >
            <BouncyCheckbox text="I am not the sender" onPress={(isChecked: boolean) => { console.log(isChecked) }} />
            <Container>
                <Input placeholder="Reciever Name" width="50%" />
                <Input placeholder="Reciever Phone number" width="50%" />
            </Container>
        </Container>
    )
}

export default Order
