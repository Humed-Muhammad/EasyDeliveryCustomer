import React, { useState } from "react"
import Container from "@Components/Atoms/Container"
import Location from "@Components/Organisms/Location"
import VehicleCard from "@Components/Organisms/VehicleCard"
import { ScrollView } from "react-native"
import Button from "@Components/Atoms/Button"
import Map from "@Components/Organisms/Map"
import { useDispatch, useSelector } from "react-redux"
import { colors } from "@Utils/Color/colors"
import {
    pickupAddPickupPlace,
    pickupChangeCheckBoxStatus,
    pickupChangeIconStatus,
    pickupChangeModalCheckBoxStatus,
    pickupChangeModalCheckerStatus,
} from '@Redux/Slices/PickUpSlice';
import { dropoffChangeCheckBoxHandler, dropoffChangeCheckBoxStatus, dropoffChangeCheckerStatus } from "@Redux/Slices/DropoffSlice"
import Input from "@Components/Atoms/Inputs"
import { Formik } from "formik"
import BouncyCheckbox from "react-native-bouncy-checkbox"



const Pickup = ({ navigation }) => {
    let [vehicleList, setVehicleList] = useState([
        {
            uri: "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            status: false
        },
        {
            uri: "https://img.favpng.com/2/23/2/toyota-vitz-toyota-aygo-car-toyota-avensis-png-favpng-WJ5EPmpHBr2bgbSHVwaXLLJk4.jpg",
            status: false
        },
        {
            uri: "https://img.favpng.com/15/9/8/2018-toyota-corolla-2017-toyota-corolla-car-2007-toyota-corolla-png-favpng-T0JG8SV7AcGAmbVQJh4X8pdYZ.jpg",
            status: false
        },
        {
            uri: "https://img.favpng.com/17/14/9/commercial-vehicle-car-south-africa-pickup-truck-png-favpng-JzveXKfAWcNfUaqXtMDupzZyT.jpg",
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
    const { pickupPlace } = useSelector((state: any) => state.pickup)
    const { pickupCheckBoxStatus } = useSelector((state: any) => state.pickup.status)
    const { pickupModalCheckBoxStatus } = useSelector((state: any) => state.pickup.status)
    const { pickupModalCheckerStatus } = useSelector((state: any) => state.pickup.status)
    console.log("modal-checkbox " + pickupModalCheckBoxStatus, "checkbox " + pickupCheckBoxStatus, "modal-checker " + pickupModalCheckerStatus)


    const Vehicles = vehicleList.map((item, index) => {
        return (<VehicleCard handleClick={handleClick} item={item} key={index} index={index} />)
    })



    return (
        <Container height="100%" width="100%">
            <Map />
            <Container direction="column" position="absolute" bottom="0px">
                {pickupPlace.length == 0 && (
                    <Formik
                        initialValues={{ mainLocation: "Current Location", specificLocaiton: "" }}
                        onSubmit={values => {
                            dispatch(pickupChangeIconStatus())
                            dispatch(pickupAddPickupPlace(values))
                            if (pickupCheckBoxStatus) {
                                dispatch(pickupChangeModalCheckerStatus(true))
                                dispatch(pickupChangeCheckBoxStatus())
                                dispatch(dropoffChangeCheckerStatus(true))
                                dispatch(dropoffChangeCheckBoxStatus(true))
                            } else {
                                dispatch(pickupChangeCheckBoxStatus())
                                dispatch(dropoffChangeCheckBoxHandler(true))
                                dispatch(dropoffChangeCheckBoxStatus(true))
                            }
                            console.log(values)
                        }}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (


                            <>
                                <Container padd="10px" direction="column" justify="space-between" align="flex-start" width="90%" >
                                    <BouncyCheckbox fillColor={`${colors.secondary}`} textStyle={{ textDecorationLine: "none" }} text="I am not the sender" onPress={() => {
                                        dispatch(pickupChangeCheckBoxStatus())
                                        dispatch(pickupChangeModalCheckBoxStatus(true))
                                    }} />
                                    {
                                        pickupCheckBoxStatus && pickupModalCheckBoxStatus && (<Container>
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
                <Location />
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
