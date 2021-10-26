import React, { useState } from "react"
import Container from "@Components/Atoms/Container"
import Location from "@Components/Organisms/Location"
import VehicleCard from "@Components/Organisms/VehicleCard"
import { ScrollView, TextInput } from "react-native"
import Button from "@Components/Atoms/Button"
import Map from "@Components/Organisms/Map"
import { useDispatch, useSelector } from "react-redux"
import { colors } from "@Utils/Color/colors"
import {
    toogleModal,
    removePickupPlace,
    addPickupPlace,
    changeIconStatus,
    changeCheckBoxStatus,
    changeModalCheckBoxStatus,
    changeModalCheckerStatus
} from '@Redux/Slices/PickUpSlice';
import Input from "@Components/Atoms/Inputs"
import SenderReciver from "@Components/Organisms/SenderReciver"
import { Formik } from "formik"
import CardConatiner from "@Components/Atoms/CardContainer"
import Text from "@Components/Atoms/Text"
import { Icons } from "@Components/Atoms/Icons"
import ModalView from "@Components/Organisms/Modal"
import BouncyCheckbox from "react-native-bouncy-checkbox"



const Pickup = ({ navigation }) => {
    let [vehicleList, setVehicleList] = useState([
        {
            uri: "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            text: "Motercycle",
            status: false
        },
        {
            uri: "https://img.favpng.com/2/23/2/toyota-vitz-toyota-aygo-car-toyota-avensis-png-favpng-WJ5EPmpHBr2bgbSHVwaXLLJk4.jpg",
            text: "Vitz",
            status: false
        },
        {
            uri: "https://img.favpng.com/15/9/8/2018-toyota-corolla-2017-toyota-corolla-car-2007-toyota-corolla-png-favpng-T0JG8SV7AcGAmbVQJh4X8pdYZ.jpg",
            text: "Corolla",
            status: false
        },
        {
            uri: "https://img.favpng.com/17/14/9/commercial-vehicle-car-south-africa-pickup-truck-png-favpng-JzveXKfAWcNfUaqXtMDupzZyT.jpg",
            text: "Truck",
            status: false
        }])


    const handleClick = (index) => {
        let newvehicleList = [...vehicleList]
        vehicleList[index].status = !vehicleList[index].status;

        vehicleList.map(item => {
            if (vehicleList.indexOf(item) != index) {
                item.status = false
            }
        })

        setVehicleList(newvehicleList)
    }

    const dispatch = useDispatch()
    const { place } = useSelector((state: any) => state.pickup)
    const { modalStatus } = useSelector((state: any) => state.pickup.status)
    const { iconStatus } = useSelector((state: any) => state.pickup.status)
    const { checkBoxStatus } = useSelector((state: any) => state.pickup.status)
    const { modalCheckBoxStatus } = useSelector((state: any) => state.pickup.status)
    const { modalCheckerStatus } = useSelector((state: any) => state.pickup.status)
    console.log("modal-checkbox " + modalCheckBoxStatus, "checkbox " + checkBoxStatus, "modal-checker " + modalCheckerStatus)


    const Vehicles = vehicleList.map((item, index) => {
        return (<VehicleCard handleClick={handleClick} item={item} key={index} index={index} />)
    })

    const iconStyle = {
        // position: "absolute",
        right: 1,
        top: 1,
        zIndex: 100
    }


    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                {place.length == 0 && (
                    <Formik
                        initialValues={{ mainLocation: "Current Location", specificLocaiton: "" }}
                        onSubmit={values => {
                            dispatch(changeIconStatus())
                            dispatch(addPickupPlace(values))
                            if (checkBoxStatus) {
                                dispatch(changeModalCheckerStatus(true))
                                dispatch(changeCheckBoxStatus())
                            } else {
                                dispatch(changeCheckBoxStatus())
                            }
                            console.log(values)
                        }}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (


                            <>
                                <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                    <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the sender" onPress={() => {
                                        dispatch(changeCheckBoxStatus())
                                        dispatch(changeModalCheckBoxStatus(true))
                                    }} />
                                    {
                                        checkBoxStatus && modalCheckBoxStatus && (<Container>
                                            <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Full name" width="50%" />
                                            <Input radius="0px" borderWidth="0px" borderBottomWidth={1} placeholder="Phone number" width="50%" />
                                        </Container>)
                                    }
                                </Container>
                                <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("mainLocation")} onFoucs value={values.mainLocation} placeholder="Pickup location" />
                                <Input width="85%" radius="0px" borderWidth="0px" borderBottomWidth={1} onChangeText={handleChange("specificLocaiton")} value={values.specificLocaiton} placeholder="Specific pickup location" />
                                <Container padd="0px" width="90%" justify="flex-start">
                                    <Button width="50px" height="30px" onPress={handleSubmit} text="Add" />
                                </Container>
                            </>
                        )}

                    </Formik>
                )}

                <Container direction="column" width="95%" >
                    <Container>
                        {place.length >= 1 && (
                            <CardConatiner padd="11px" justify="flex-start"  >
                                <ScrollView horizontal>
                                    {
                                        place && place.map((item, index) => (
                                            <CardConatiner padd="10px" key={index} bg={colors.gray} justify="space-around" height="90%" width="100px">
                                                <Text color={colors.white} bg="gray" key={index} fontSize="12px" fontWeight="bold" >{item && item.mainLocation}</Text>
                                                <Icons style={null} onPress={() => {
                                                    dispatch(removePickupPlace(index))
                                                    if (place.length <= 1) {
                                                        dispatch(changeModalCheckBoxStatus(false))
                                                        dispatch(changeCheckBoxStatus())
                                                    }
                                                }} color={colors.white} size={17} name="close" />
                                            </CardConatiner>
                                        ))
                                    }
                                </ScrollView>

                                <Icons color={colors.icon} size={40} style={iconStyle} name="add" onPress={() => dispatch(toogleModal())} />
                            </CardConatiner>
                        )}
                    </Container>

                    {modalStatus && <ModalView justify="flex-start" height="100%" width="100%" status={modalStatus.status} onPress={() => dispatch(toogleModal())}>
                        <Formik
                            initialValues={{ mainLocation: "", specificLocaiton: "" }}
                            onSubmit={(values) => {
                                console.log(values)
                                dispatch(toogleModal())
                                dispatch(addPickupPlace(values))
                                if (modalCheckerStatus && !checkBoxStatus) {
                                    dispatch(changeCheckBoxStatus())
                                    dispatch(changeModalCheckerStatus(false))
                                } else if (checkBoxStatus && modalCheckerStatus) {
                                    dispatch(changeCheckBoxStatus())
                                    dispatch(changeModalCheckerStatus(true))
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
                                            modalCheckerStatus && (
                                                <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the sender" onPress={() => {
                                                    dispatch(changeCheckBoxStatus())
                                                    dispatch(changeModalCheckBoxStatus(false))
                                                }} />
                                            )
                                        }
                                        {
                                            checkBoxStatus && (
                                                <Container>
                                                    <Input placeholder="Full name" width="50%" />
                                                    <Input placeholder="Phone number" width="50%" />
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
                <ScrollView horizontal={true}>
                    {
                        Vehicles
                    }
                </ScrollView>
                <Container justify="space-around" >
                    <Button onPress={() => navigation.navigate("Root")} text="Back" width="45%" />
                    <Button bg={colors.secondary} onPress={() => navigation.navigate("Drop-off")} text="Next" width="45%" />
                </Container>


            </Container>
        </Container>
    )
}

export default Pickup
