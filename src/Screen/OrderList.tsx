import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import OrderCard from "@Components/Organisms/OrderCard"
import Container from '@Components/Atoms/Container'

const OrderList = ({ navigation }) => {

    let [orders, setOrders] = useState([
        {
            orderNumber: "00050",
            date: "04/03/21, 3:00pm",
            pickup: [{ first: "bole" }, { second: "piassa" }],
            dropoff: "Jemo",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },
        {
            orderNumber: "00060",
            date: "03/05/21, 6:00pm",
            pickup: [{ first: "bole" }, { second: "jemo" }],
            dropoff: "Piass",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },
        {
            orderNumber: "00070",
            date: "04/03/21, 3:00pm",
            pickup: [{ first: "Gelan" }, { second: "piassa" }],
            dropoff: "Kaliti",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },

    ])

    const handleOpen = (index) => {
        let newOrders = [...orders]
        newOrders[index].isClicked = true;

        newOrders.map(item => {
            if (orders.indexOf(item) != index) {
                item.isClicked = false
            }
        })

        setOrders(newOrders)
    }

    const handleClose = (index) => {
        let newOrders = [...orders]
        newOrders[index].isClicked = false;

        setOrders(newOrders)
    }


    const list = orders.map((item, index) => (
        <OrderCard height="150px" navigation={navigation} key={index} handleOpen={handleOpen} handleClose={handleClose} index={index} item={item} />
    ))

    return (
        <Container height="100%" direction="column" justify="flex-start">
            <ScrollView  >
                {list}
            </ScrollView>
        </Container>
    )
}

export default OrderList
