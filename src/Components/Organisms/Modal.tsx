import CardConatiner from "@Components/Atoms/CardContainer";
import Container from "@Components/Atoms/Container";
import { IconClose } from "@Components/Atoms/Icons";
import Input from "@Components/Atoms/Inputs";
import { colors } from "@Utils/Color/colors";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const ModalView = ({ modalVisible, setModalVisible }) => {

    const shadowProp = {
        color: colors.gray,
        offSet: { width: "-2px", height: "4px" },
        opacity: 0.6,
        radius: "3px",
        elevation: "5"
    }
    return (
        <Container height="100%" bg="transparent" position="absolute">
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                style={{ flex: 1 }}
            >
                <Container bg="transparent" position="absolute" height="100%" >
                    <CardConatiner direction="column" justify="flex-start" height="100%" width="100%" shadow={shadowProp} >
                        <Container height="40%">
                            <GooglePlacesAutocomplete
                                placeholder='Enter Location'
                                minLength={2}
                                fetchDetails={true}
                                query={{
                                    key: 'AIzaSyA9qyX7APnxyKnoA18fA6BoGf1ak4posys',
                                    language: 'en',
                                }}
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    console.log(data, details);
                                }}
                            />
                        </Container>
                        <IconClose onPress={() => setModalVisible(!modalVisible)} />
                    </CardConatiner>
                </Container>
            </Modal>
        </Container>
    );
};



export default ModalView;