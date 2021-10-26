import React, { useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import { Icons, IconShrink } from '@Components/Atoms/Icons';
import CardConatiner from '@Components/Atoms/CardContainer';
import { colors } from '@Utils/Color/colors';
import Text from '@Components/Atoms/Text';
import ModalView from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'native-base';
import SenderReciver from "@Components/Organisms/SenderReciver"
import Button from '@Components/Atoms/Button';



const Location = ({ placeholder, toogle, addPlace, removePlace, modalStatus, iconStatus }) => {
  const ref: any = useRef()

  const iconStyle = {
    // position: "absolute",
    right: 1,
    top: 1,
    zIndex: 100
  }

  const dispatch = useDispatch();
  const { place } = useSelector((state: any) => state.pickup)
  console.log(place.length)


  return (
    <Container direction="column" width="95%" >
      <Container>
        <CardConatiner padd="11px" justify="flex-start"  >
          <ScrollView horizontal>
            {
              place.map((item, index) => (
                <CardConatiner padd="10px" key={index} bg={colors.gray} justify="space-around" height="90%" width="100px">
                  <Text color={colors.white} bg="gray" key={index} fontSize="12px" fontWeight="bold" >{item && item.mainLocation}</Text>
                  <Icons style={null} onPress={() => dispatch(removePlace(index))} color={colors.white} size={17} name="close" />
                </CardConatiner>
              ))
            }
          </ScrollView>
          {place.lenght <= 1 ? (
            <Icons color={colors.icon} size={40} style={iconStyle} name="add" onPress={() => dispatch(toogle())} />
          ) : null}
        </CardConatiner>
      </Container>
      {modalStatus && <ModalView justify="flex-start" height="100%" width="100%" status={modalStatus.status} onPress={() => dispatch(toogle())}>
        <Container direction="column" height="90%">
          {/* <SenderReciver text="I am not the sender" name="Sender name" phone="Sender phone" />
          <Input autoFocus={true} placeholder={placeholder.location} />
          <Input placeholder={placeholder.specificLocation} />
          <Button onPress={() => {
            dispatch(addPlace("Jemo and bole"))
            dispatch(toogle())
          }} width="60%" text="Add" /> */}
        </Container>
      </ModalView>}
    </Container>
  )
}

export default Location
