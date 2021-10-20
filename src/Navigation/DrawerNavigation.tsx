import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { screenList } from "@Routes/DrawerNavigationList"


const Drawer = createDrawerNavigator();

const screens = screenList.map((item: any, index) => (
    <Drawer.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={{
            headerShown: true,

        }}
    />
))


export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            {screens}
        </Drawer.Navigator>
    )
}