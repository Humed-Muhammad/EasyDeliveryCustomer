import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight } from "react-native"
import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import Image from '@Components/Atoms/Image'
import { colors } from '@Utils/Color/colors'



const VehicleCard = ({ index, item, handleClick }) => {


    return (
        <TouchableHighlight underlayColor={colors.white} onPress={() => handleClick(index)} >
            <CardConatiner borderTopWidth={item.status && "3px"} borderColor={item.status && colors.secondary} padd="10px" justify="space-around" width="220px" height="90px">
                <Image width={100} source={{
                    uri: `${item.uri}`,
                }} />
                <Text fontWeight="bold" color={colors.gray} >{item.text}</Text>
            </CardConatiner>

        </TouchableHighlight>
    )
}

// const styles = StyleSheet.create({
//     borderStyle: {
//         borderWidth: 2,
//         borderStyle: "solid",
//         borderColor: colors.secondary
//     }
// })





export default VehicleCard
