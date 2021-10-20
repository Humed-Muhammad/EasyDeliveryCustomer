import React from 'react'
import SenderReciver from '@Components/Organisms/SenderReciver'
import Container from '@Components/Atoms/Container'
import Location from '@Components/Organisms/Location'
import Input from '@Components/Atoms/Inputs'
import Map from '@Components/Organisms/Map'
import Button from '@Components/Atoms/Button'


const DropoffLocation = ({ navigation }) => {
    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                <SenderReciver text="I am not the receiver" name="Receiver name" phone="Receiver phone" />
                <Location placeholder={{ location: "Drop-off location", specificLocation: "Specific location" }} />
                <Input placeholder="Additional infromation" height="120px" />
                <Button onPress={() => navigation.navigate("Drop-off")} text="Next" width="90%" />
            </Container>
        </Container>
    )
}

export default DropoffLocation
