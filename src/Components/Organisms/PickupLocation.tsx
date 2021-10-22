import React, { useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import { Icons } from '@Components/Atoms/Icons';
import CardConatiner from '@Components/Atoms/CardContainer';
import { colors } from '@Utils/Color/colors';
import Text from '@Components/Atoms/Text';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ModalView from './Modal';
import { toogleModal } from '@Redux/Slices/PickUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'native-base';
import { Keyboard } from 'react-native';



const Location = ({ placeholder, place }) => {
  const ref: any = useRef()

  const iconStyle = {
    position: "absolute",
    right: 5,
    zIndex: 100
  }

  const dispatch = useDispatch();
  const { modalStatus } = useSelector((state: any) => state.pickup)
  console.log(modalStatus)
  return (
    <Container direction="column" width="90%" >
      <Container>
        <CardConatiner padd="20px" justify="flex-start" height="75px" >
          {
            place.map((item, index) => (
              <Text key={index} fontSize="15px" fontWeight="bold" >{item}</Text>
            ))
          }
          <Icons color={colors.icon} size={40} style={iconStyle} name="add" onPress={() => dispatch(toogleModal())} />
        </CardConatiner>
      </Container>
      <Input placeholder={placeholder.specificLocation} width="100%" />
      {modalStatus.status && <ModalView justify="flex-start" height="100%" width="100%" status={modalStatus.status} onPress={() => dispatch(toogleModal())}>
        <Container height="40%">
          <Input autoFocus={true} placeholder="Add Pickup location" />
        </Container>
      </ModalView>}
    </Container>
  )
}

export default Location
