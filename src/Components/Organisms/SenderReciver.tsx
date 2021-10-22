import React, { useState } from 'react'
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from '@Utils/Color/colors';

const Sender = ({ name, phone, text }) => {
    let [isSender, setIsSender] = useState(false)
    return (
        <Container padd="10px" direction="column" justify="center" align="flex-start" width="90%" >
            <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text={text} onPress={(isChecked: boolean) => { setIsSender(isChecked) }} />
            {
                isSender && (<Container>
                    <Input placeholder={name} width="50%" />
                    <Input placeholder={phone} width="50%" />
                </Container>)
            }
        </Container>
    )
}

export default Sender
