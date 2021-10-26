import React, { useState } from 'react'
import SenderReciver from '@Components/Organisms/SenderReciver'
import Container from '@Components/Atoms/Container'
import Location from '@Components/Organisms/Location'
import Input from '@Components/Atoms/Inputs'
import Map from '@Components/Organisms/Map'
import Button from '@Components/Atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
    addDropoffPlace,
    removeDropoffPlace,
    dropoffChangeCheckBoxStatus,
    dropoffChangeIconStatus,
    dropoffChangeModalCheckBoxStatus,
    dropoffChangeCheckerStatus,
    dropoffToogleModal,
    dropoffChangeCheckBoxHandler,
} from '@Redux/Slices/DropoffSlice'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import { ScrollView } from 'native-base'
import { Icons } from '@Components/Atoms/Icons'
import ModalView from '@Components/Organisms/Modal'
import { colors } from "@Utils/Color/colors"



const Dropoff = ({ navigation }) => {
    const dispatch = useDispatch();
    const { dropoffPlace } = useSelector((state: any) => state.dropoff)
    const { pickupPlace } = useSelector((state: any) => state.pickup)
    console.log(pickupPlace.length)
    const { dropoffModalStatus } = useSelector((state: any) => state.dropoff.status)
    const { dropoffCheckBoxHandler } = useSelector((state: any) => state.dropoff.status)
    const { dropoffIconStatus } = useSelector((state: any) => state.dropoff.status)
    const { dropoffCheckBoxStatus } = useSelector((state: any) => state.dropoff.status)
    const { dropoffModalCheckBoxStatus } = useSelector((state: any) => state.dropoff.status)
    const { dropoffCheckerStatus } = useSelector((state: any) => state.dropoff.status)
    console.log(" dropoffCheckerStatus " + dropoffCheckerStatus, "dropoffCheckBoxStatus " + dropoffCheckBoxStatus, "dropoffCheckBoxHandler " + dropoffCheckBoxHandler)

    const iconStyle = {
        right: 1,
        top: 1,
        zIndex: 100
    }

    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                {
                    dropoffPlace.length == 0 && (
                        <Formik
                            initialValues={{ mainLocation: "", specificLocaiton: "" }}
                            onSubmit={values => {
                                dispatch(addDropoffPlace(values))
                                if (dropoffCheckBoxStatus && dropoffCheckBoxHandler) {
                                    dispatch(dropoffChangeCheckBoxHandler(false))
                                    dispatch(dropoffChangeCheckerStatus(true))
                                    dispatch(dropoffChangeModalCheckBoxStatus())
                                } else {
                                    dispatch(dropoffChangeCheckerStatus(false))
                                    dispatch(dropoffChangeCheckBoxHandler(false))
                                }
                            }}
                        >
                            {({ handleSubmit, handleChange, values, errors }) => (

                                <>
                                    <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                        {
                                            dropoffCheckerStatus && (
                                                <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the reciever" onPress={() => {
                                                    dispatch(dropoffChangeCheckBoxHandler(false))
                                                    dispatch(dropoffChangeCheckBoxStatus(true))
                                                }} />
                                            )
                                        }
                                        {
                                            dropoffCheckBoxHandler && (
                                                <Container>
                                                    <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
                                                    <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
                                                </Container>
                                            )
                                        }
                                    </Container>
                                    <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Drop-off location" />
                                    <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific drop-off location" />
                                    <Container padd="0px" width="90%" justify="flex-start">
                                        <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                    </Container>
                                </>


                            )}

                        </Formik>
                    )
                }
                <Container direction="column" width="90%" >
                    <Container direction="column">
                        {
                            dropoffPlace.length >= 1 && (
                                <CardConatiner padd="11px" justify="flex-start"  >
                                    <ScrollView horizontal>
                                        {
                                            dropoffPlace && dropoffPlace.map((item, index) => (
                                                <CardConatiner padd="10px" key={index} bg={colors.gray} justify="space-around" height="90%" width="100px">
                                                    <Text color={colors.white} key={index} fontSize="12px" fontWeight="bold" >{item && item.mainLocation}</Text>
                                                    <Icons style={null} onPress={() => dispatch(removeDropoffPlace(index))} color={colors.white} size={17} name="close" />
                                                </CardConatiner>
                                            ))
                                        }
                                    </ScrollView>

                                    {
                                        pickupPlace.length <= 1 && (
                                            <Icons color={colors.icon} size={40} style={iconStyle} name="add" onPress={() => dispatch(dropoffToogleModal())} />
                                        )}
                                </CardConatiner>
                            )
                        }

                        <Input width="100%" placeholder="Additional infromation" height="120px" />
                    </Container>

                    {dropoffModalStatus && <ModalView justify="flex-start" height="100%" width="100%" status={dropoffModalStatus.status} onPress={() => dispatch(dropoffToogleModal())}>
                        <Formik
                            initialValues={{ mainLocation: "", specificLocaiton: "" }}
                            onSubmit={(values) => {
                                dispatch(addDropoffPlace(values))
                                dispatch(dropoffToogleModal())
                            }}
                        >
                            {({ handleSubmit, values, handleChange }) => (
                                <Container height="100%" direction="column">
                                    <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                        {

                                            dropoffCheckerStatus && (
                                                <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the reciever" onPress={() => {
                                                    dispatch(dropoffChangeModalCheckBoxStatus())
                                                }} />
                                            )

                                        }
                                        {
                                            !dropoffModalCheckBoxStatus && (
                                                <Container>
                                                    <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
                                                    <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
                                                </Container>
                                            )

                                        }
                                    </Container>
                                    <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Drop-off location" />
                                    <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific drop-off location" />
                                    <Container padd="0px" width="90%" justify="flex-end">
                                        <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                    </Container>
                                </Container>
                            )}
                        </Formik>
                    </ModalView>}

                </Container>
                <Container justify="space-around" >
                    <Button onPress={() => navigation.navigate("Pickup")} text="Back" width="45%" />
                    <Button bg={colors.secondary} onPress={() => navigation.navigate("")} text="Next" width="45%" />
                </Container>


            </Container>
        </Container>
    )
}

export default Dropoff
