import CardConatiner from '@Components/Atoms/CardContainer'
import Text from '@Components/Atoms/Text'
import Image from '@Components/Atoms/Image'
import { colors } from '@Utils/Color/colors'
import React from 'react'
import { TouchableHighlight } from "react-native"



const VehicleCard = ({ uri, text }) => {
    const shadowProp = {
        color: colors.gray,
        offSet: { width: "-2px", height: "4px" },
        opacity: 0.6,
        radius: "3px",
        elevation: "5"
    }
    return (
        <TouchableHighlight underlayColor={colors.white} onPress={() => console.log("Hulu")} >
            <CardConatiner padd="3px" justify="space-around" shadow={shadowProp} width="250px" height="80px">
                <Image source={{
                    uri: `${uri}`,
                }} />
                <Text>{text}</Text>
            </CardConatiner>

        </TouchableHighlight>
    )
}






export default VehicleCard
