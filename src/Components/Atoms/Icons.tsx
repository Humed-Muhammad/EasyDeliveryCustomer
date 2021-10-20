import { colors } from '@Utils/Color/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { StyleSheet } from 'react-native';


export const IconAdd = () => {
    return (
        <Icon style={styles.iconAdd} name="add" size={30} color={colors.blue} />
    )
}


export const IconMenu = () => {
    return (
        <Icon style={styles.iconMenu} name="menu" />
    )
}

export const IconExpand = () => {
    return (
        <Icon style={styles.iconDrop} name="expand-more" />
    )
}

export const IconShrink = () => {
    return (
        <Icon style={styles.iconDrop} name="expand-less" />
    )
}

export const IconPhoto = () => {
    return (
        <Icon style={styles.iconPhoto} name="camera-alt" />
    )
}


const styles = StyleSheet.create({
    iconAdd: {
        position: "absolute",
        right: 5,
    },
    iconMenu: {
        fontSize: 40
    },
    iconDrop: {
        fontSize: 30,
        position: "absolute",
        zIndex: 100,
        right: 5,
    },
    iconPhoto: {
        fontSize: 50,
        position: "absolute",
        zIndex: 100,
        right: "29%",
        bottom: -6,
        color: colors.gray
    }
})


