import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { screenList } from "@Routes/authenticatedStackList"
import { colors } from "@Utils/Color/colors";


const Stack = createNativeStackNavigator();

const screens = screenList.map((item: any, index) => (
    <Stack.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={{
            title: item.title,
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,

        }}
    />
))

export const AuthenticatedStackNavigation = () => {
    return (
        <Stack.Navigator>
            {screens}
        </Stack.Navigator>
    )
}