import React, { useState } from 'react'
import SenderReciver from '@Components/Organisms/SenderReciver'
import Container from '@Components/Atoms/Container'
import DropoffLocation from '@Components/Organisms/DropoffLocation'
import Input from '@Components/Atoms/Inputs'
import Map from '@Components/Organisms/Map'
import Button from '@Components/Atoms/Button'


const Dropoff = ({ navigation }) => {
    let [dropoffLocation, setDropoffLocation] = useState([""])
    return (
        <Container height="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                <SenderReciver text="I am not the receiver" name="Receiver name" phone="Receiver phone" />
                {/* <DropoffLocation place={dropoffLocation} placeholder={{ location: "Drop-off location", specificLocation: "Specific location" }} /> */}
                <Input placeholder="Additional infromation" height="120px" />
                <Button onPress={() => navigation.navigate("Drop-off")} text="Next" width="90%" />
            </Container>
        </Container>
    )
}

export default Dropoff