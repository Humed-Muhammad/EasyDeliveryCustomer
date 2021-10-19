import React, { useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Container from '@Components/Atoms/Container'
import Input from '@Components/Atoms/Inputs'
import { IconAdd } from '@Components/Atoms/Icons';



const Location = ({ placeholder }) => {
  const ref: any = useRef()




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
        <Input onChangeText={(value) => ref.current.setAddressText(value)} placeholder={placeholder.location} width="100%" />
        <IconAdd />
      </Container>
      <Input placeholder={placeholder.specificLocation} width="100%" />
    </Container>
  )
}

export default Location
{/* <GooglePlacesAutocomplete
  placeholder='Enter Location'
  minLength={2} AIzaSyA9qyX7APnxyKnoA18fA6BoGf1ak4posys
  autoFocus={false}
  returnKeyType={'default'}
  fetchDetails={true}
  styles={{
    textInputContainer: {
      backgroundColor: 'grey',
    },
    textInput: {
      height: 38,
      color: '#5d5d5d',
      fontSize: 16,
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  }}
/> */}