import { colors } from '@Utils/Color/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { Pressable, StyleSheet } from 'react-native';


export const IconAdd = ({ onPress }) => {
    return (
        <Pressable style={styles.iconAdd} onPress={() => onPress()}>
            <Icon name="add" size={30} color={colors.blue} />
        </Pressable>
    )
}

export const IconMenu = ({ onPress }) => {
    return (
        <Pressable onPress={() => onPress()} >
            <Icon style={styles.iconMenu} name="menu" />
        </Pressable>
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

export const IconPhoto = ({ onPress }) => {
    return (
        <Pressable onPress={() => onPress()} style={styles.iconPhotoContainer}>
            <Icon style={styles.iconPhoto} name="camera-alt" />
        </Pressable>
    )
}

export const IconHome = () => {
    return <Icon name="home" style={styles.iconNav} />
}

export const IconReport = () => {
    return <Icon name="contact-support" style={styles.iconNav} />
}

export const IconProfile = () => {
    return <Icon name="person" style={styles.iconNav} />
}

export const IconOrder = () => {
    return <Icon name="pending" style={styles.iconNav} />
}

export const IconClose = ({ onPress }) => {

    return (
        <Pressable onPress={() => onPress()} style={styles.iconCloseContainer}>
            <Icon name="close" style={styles.iconClose} />
        </Pressable>
    )

}

const styles = StyleSheet.create({
    iconAdd: {
        position: "absolute",
        right: 5,
        zIndex: 100
    },
    iconMenu: {
        fontSize: 40,
        color: colors.gray
    },
    iconDrop: {
        fontSize: 30,
        position: "absolute",
        zIndex: 100,
        right: 5,
    },
    iconPhoto: {
        fontSize: 50,
        color: colors.gray
    },
    iconPhotoContainer: {
        position: "absolute",
        zIndex: 10,
        right: "29%",
        bottom: -6,
        color: colors.gray
    },

    iconNav: {
        fontSize: 30,
        color: colors.icon
    },
    iconCloseContainer: {
        position: "absolute",
        zIndex: 10,
        right: 20,
        top: 20,
        height: 40,
        width: 40,
        borderColor: colors.gray,
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 2,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }
    ,
    iconClose: {
        fontSize: 30,
        color: colors.gray
    }

})


