import Button from "@Components/Atoms/Button"
import CardConatiner from "@Components/Atoms/CardContainer"
import Container from "@Components/Atoms/Container"
import { Icons } from "@Components/Atoms/Icons"
import Input from "@Components/Atoms/Inputs"
import Text from "@Components/Atoms/Text"
import { colors } from "@Utils/Color/colors"
import { Formik } from "formik"
import { ScrollView } from "native-base"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { useDispatch, useSelector } from "react-redux"
import ModalView from "./Modal"
import {
  pickupToogleModal,
  pickupAddPickupPlace,
  pickupChangeCheckBoxStatus,
  pickupChangeModalCheckBoxStatus,
  pickupChangeModalCheckerStatus,
  pickupRemovePickupPlace
} from '@Redux/Slices/PickUpSlice';
import React from "react"


const Location = () => {
  const dispatch = useDispatch()
  const { pickupPlace } = useSelector((state: any) => state.pickup)
  const { pickupModalStatus } = useSelector((state: any) => state.pickup.status)
  const { pickupCheckBoxStatus } = useSelector((state: any) => state.pickup.status)
  const { pickupModalCheckerStatus } = useSelector((state: any) => state.pickup.status)
  const { dropoffPlace } = useSelector((state: any) => state.dropoff)

  const iconStyle = {
    // position: "absolute",
    right: 1,
    top: 1,
    zIndex: 100
  }


  return (
    <Container direction="column" width="95%" >
      <Container>
        {pickupPlace.length >= 1 && (
          <CardConatiner padd="11px" justify="flex-start"  >
            <ScrollView horizontal>
              {
                pickupPlace && pickupPlace.map((item, index) => (
                  <CardConatiner padd="10px" key={index} bg={colors.gray} justify="space-around" height="90%" width="100px">
                    <Text color={colors.white} bg="gray" key={index} fontSize="12px" fontWeight="bold" >{item && item.mainLocation}</Text>
                    <Icons style={null} onPress={() => {
                      dispatch(pickupRemovePickupPlace(index))
                      if (pickupPlace.length <= 1) {
                        dispatch(pickupChangeModalCheckBoxStatus(false))
                        dispatch(pickupChangeCheckBoxStatus())

                      }
                    }} color={colors.white} size={17} name="close" />
                  </CardConatiner>
                ))
              }
            </ScrollView>

            {
              dropoffPlace.length <= 1 && (
                <Icons color={colors.icon} size={40} style={iconStyle} name="add" onPress={() => dispatch(pickupToogleModal())} />
              )
            }
          </CardConatiner>
        )}
      </Container>

      {pickupModalStatus && <ModalView justify="flex-start" height="100%" width="100%" status={pickupModalStatus.status} onPress={() => dispatch(pickupToogleModal())}>
        <Formik
          initialValues={{ mainLocation: "", specificLocaiton: "" }}
          onSubmit={(values) => {
            console.log(values)
            dispatch(pickupToogleModal())
            dispatch(pickupAddPickupPlace(values))
            if (pickupModalCheckerStatus && !pickupCheckBoxStatus) {
              dispatch(pickupChangeCheckBoxStatus())
              dispatch(pickupChangeModalCheckerStatus(false))
            } else if (pickupCheckBoxStatus && pickupModalCheckerStatus) {
              dispatch(pickupChangeCheckBoxStatus())
              dispatch(pickupChangeModalCheckerStatus(true))
            }
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <Container height="100%" direction="column">
              <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                <Container padd="20px" >
                  <Text fontWeight="bold" color={colors.gray} fontSize="20px" > Add Pickup Location </Text>
                </Container>
                {
                  pickupModalCheckerStatus && (
                    <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the sender" onPress={() => {
                      dispatch(pickupChangeCheckBoxStatus())
                      dispatch(pickupChangeModalCheckBoxStatus(false))
                    }} />
                  )
                }
                {
                  pickupCheckBoxStatus && (
                    <Container>
                      <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
                      <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
                    </Container>
                  )
                }
              </Container>
              <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Pickup location" />
              <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific pickup location" />
              <Container padd="0px" width="90%" justify="flex-end">
                <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
              </Container>
            </Container>
          )}
        </Formik>
      </ModalView>}

    </Container>
  )
}

export default Location