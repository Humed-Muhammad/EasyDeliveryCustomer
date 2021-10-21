import Button from '@Components/Atoms/Button'
import Container from '@Components/Atoms/Container'
import Image from '@Components/Atoms/Image'
import Input from '@Components/Atoms/Inputs'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Modal from "@Components/Organisms/Modal"
import FilePicker from "@Components/Organisms/FilePicker"



const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [imageUri, setImageUri] = useState("https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg")

    return (
        <ScrollView style={{ height: "100%" }}>
            <Container justify="space-around" direction="column" height="650px">
                <Container>
                    <FilePicker setImageUri={setImageUri} />
                    <Image radius={5} height={150} width="40%" source={{ uri: imageUri }} />
                </Container>
                <Container justify="space-evenly" height="50%" direction="column">
                    <Input width="85%" placeholder="Full Name" />
                    <Input width="85%" placeholder="Email" />
                    <Input width="85%" placeholder="Phone Number" />
                    <Input width="85%" placeholder="Phone Number" />
                </Container>
                <Button width="90%" text="Save" />
            </Container>

        </ScrollView>
    )
}

export default Profile
