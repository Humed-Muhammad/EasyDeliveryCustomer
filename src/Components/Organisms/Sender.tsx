import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Order = () => {
    let [isSender, setIsSender] = useState(false)
    return (
        <Container padd="10px" direction="column" justify="center" align="flex-start" width="90%" >
            <BouncyCheckbox text="I am not the sender" onPress={(isChecked: boolean) => { setIsSender(isChecked) }} />
            {
                isSender && (<Container>
                    <Input placeholder="Sender Name" width="50%" />
                    <Input placeholder="Sender Phone" width="50%" />
                </Container>)
            }
        </Container>
    )
}

export default Order
