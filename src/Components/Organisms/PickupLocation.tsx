import React, { useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import { IconAdd } from '@Components/Atoms/Icons';
import CardConatiner from '@Components/Atoms/CardContainer';
import { colors } from '@Utils/Color/colors';
import Text from '@Components/Atoms/Text';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ModalView from './Modal';



const Location = ({ placeholder, place, handleModalOpen, handleModalClose, modalVisible, setModalVisible }) => {
  const ref: any = useRef()

  const shadowProp = {
    color: colors.gray,
    offSet: { width: "-2px", height: "4px" },
    opacity: 0.6,
    radius: "3px",
    elevation: "5"
  }

  return (
    <Container direction="column" width="90%" >
      <GooglePlacesAutocomplete
        ref={ref}
        textInputHide={true}
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
      <Container>
        <CardConatiner padd="20px" justify="flex-start" height="75px" shadow={shadowProp}>
          {
            place.map((item, index) => (
              <Text key={index} fontSize="15px" fontWeight="bold" >{item}</Text>
            ))
          }
          <IconAdd onPress={() => handleModalOpen()} />
        </CardConatiner>
        {modalVisible && <ModalView modalVisible={modalVisible} setModalVisible={setModalVisible} />}
      </Container>
      <Input placeholder={placeholder.specificLocation} width="100%" />
    </Container>
  )
}

export default Location
