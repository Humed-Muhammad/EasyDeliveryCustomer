import React from 'react'
import Container from '@Components/Atoms/Container'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet } from 'react-native'
import { colors } from '@Utils/Color/colors'


const Map = () => {
    return (
        <Container justify="center" bg={colors.map} height="100%" width="100%">
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        </Container>
    )
}

const styles = StyleSheet.create({

    map: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default Map
