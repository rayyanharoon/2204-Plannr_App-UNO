import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

//npm install react-navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;