import { colors } from '@Utils/Color/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { StyleSheet } from 'react-native';


export const IconAdd = () => {
    return (
        <Icon style={styles.icon} name="add" size={30} color={colors.blue} />
    )
}

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        right: 5,
    }
})


