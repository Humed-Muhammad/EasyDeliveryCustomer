import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Container from '@Components/Atoms/Container';
import Navbar from '@Components/Organisms/Navbar';
import Login from "@Components/Organisms/Login"
import Register from '@Components/Organisms/Register';
import Home from '@Components/Organisms/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        {/* <Navbar title="Register" /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;