import React from 'react'
import Container from '@Components/Atoms/Container'
import Button from '@Components/Atoms/Button';
import { StyleSheet, View } from 'react-native';
import { colors } from '@Utils/Color/colors';
import Map from "@Components/Organisms/Map"


const Home = ({ navigation }: any) => {
    return (
        <>
            <Map />
            <Container>
                <Button onPress={() => navigation.navigate("Pickup")} height="40px" text="Book now" width="90%" position="absolute" b="10px" z="100" />
            </Container>
            {/* <Container direction="column" padd="10px" b="0" position="absolute" justify="center" bg={colors.white} width="100%">
                <Input width="50%" placeholder="Email / Phone Number" />
                <Input width="50%" placeholder="Password" />
            </Container> */}
        </>
    )
}



export default Home
