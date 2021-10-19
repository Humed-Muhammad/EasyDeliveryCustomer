import React from "react"
import Container from "@Components/Atoms/Container"
import SenderReciver from "@Components/Organisms/SenderReciver"
import Location from "@Components/Organisms/Location"
import VehicleCard from "@Components/Organisms/VehicleCard"
import { ScrollView } from "react-native"
import Button from "@Components/Atoms/Button"
import Map from "@Components/Organisms/Map"

const PickupLocation = ({ navigation }) => {

    let VehicleList = [
        {
            uri: "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            text: "Motercycle"
        },
        {
            uri: "https://img.favpng.com/2/23/2/toyota-vitz-toyota-aygo-car-toyota-avensis-png-favpng-WJ5EPmpHBr2bgbSHVwaXLLJk4.jpg",
            text: "Vitz"
        },
        {
            uri: "https://img.favpng.com/15/9/8/2018-toyota-corolla-2017-toyota-corolla-car-2007-toyota-corolla-png-favpng-T0JG8SV7AcGAmbVQJh4X8pdYZ.jpg",
            text: "Corolla"
        },
        {
            uri: "https://img.favpng.com/17/14/9/commercial-vehicle-car-south-africa-pickup-truck-png-favpng-JzveXKfAWcNfUaqXtMDupzZyT.jpg",
            text: "Truck"
        }
    ]


    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" b="0px">
                <SenderReciver text="I am not the sender" name="Sender name" phone="Sender phone" />
                <Location placeholder={{ location: "Pickup location", specificLocation: "Specific Location" }} />
                <ScrollView horizontal={true}>
                    {
                        VehicleList.map((item, index) => (
                            <VehicleCard key={index} uri={item.uri} text={item.text} />
                        ))
                    }
                </ScrollView>
                <Button onPress={() => navigation.navigate("Drop-off")} text="Next" width="90%" />
            </Container>
        </Container>
    )
}

export default PickupLocation
