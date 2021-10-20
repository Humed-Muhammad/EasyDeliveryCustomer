import CardConatiner from "@Components/Atoms/CardContainer";
import Container from "@Components/Atoms/Container";
import Input from "@Components/Atoms/Inputs";
import { colors } from "@Utils/Color/colors";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ModalView = ({ modalVisible, setModalVisible }) => {

    const shadowProp = {
        color: colors.gray,
        offSet: { width: "-2px", height: "4px" },
        opacity: 0.6,
        radius: "3px",
        elevation: "5"
    }
    return (
        <Container bg="transparent" position="absolute">
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <Container bg="transparent" position="absolute" height="50%" >
                    <CardConatiner height="50%" width="90%" shadow={shadowProp} >
                        <Input width="50%" />
                        <Pressable

                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </CardConatiner>
                </Container>
            </Modal>
            <Pressable

                onPress={() => setModalVisible(true)}
            >
                <Text >Show Modal</Text>
            </Pressable>
        </Container>
    );
};



export default ModalView;