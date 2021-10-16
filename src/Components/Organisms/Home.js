import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Container from '@Components/Atoms/Container'
import Button from '@Components/Atoms/Button';
import { StyleSheet, View } from 'react-native';

const Home = () => {
    return (
        <View>
            <Button />
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        </View>
    )
}


export default Home
