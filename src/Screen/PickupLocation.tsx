import React from "react"
import Container from "@Components/Atoms/Container"
import Sender from "@Components/Organisms/Sender"
import Location from "@Components/Organisms/Location"

const PickupLocation = () => {
    return (
        <Container direction="column" position="absolute" b="0px">
            <Sender />
            <Location placeholder={{ location: "Pickup location", specificLocation: "Specific Location" }} />
        </Container>
    )
}

export default PickupLocation
