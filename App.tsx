import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from "@react-navigation/drawer"
import { DrawerNavigation as Authenticated } from '@Navigation/DrawerNavigation'
import { NonAuthenticatedStackNavigation as NonAuthenticated } from '@Navigation/NonAuthenticatedStackNavigation'

const RootStack = createNativeStackNavigator()


const App = () => {
  let [loogedIn, setLoggedIn] = useState(true)
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName={loogedIn ? "Auth" : "NonAuth"} >
        <RootStack.Screen options={{ headerShown: false }} name="Auth" component={Authenticated} />
        <RootStack.Screen options={{ headerShown: false }} name="NonAuth" component={NonAuthenticated} />
      </RootStack.Navigator>
    </NavigationContainer>

  )
}

export default App;