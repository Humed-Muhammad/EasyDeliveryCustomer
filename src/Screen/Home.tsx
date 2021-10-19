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
                <Button onPress={() => navigation.navigate("Pickup")} text="Book now" width="90%" position="absolute" b="10px" z="100" />
            </Container>

        </>
    )
}



export default Home
