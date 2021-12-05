import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

//npm install react-navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from './context';
import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CalendarScreen from './Screens/CalendarScreen';
import AddEventScreen from './Screens/AddEventScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown:false}}>
    <AuthStack.Screen 
      name="LoginScreen"
      component={LoginScreen}
      options={{title: "Login"}}
    />

    <AuthStack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{title: "Sign Up"}}
    />

  </AuthStack.Navigator>

)

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown:false}} >
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="CalendarScreen" component={CalendarScreen}/>
    <HomeStack.Screen name="AddEventScreen" component={AddEventScreen}/>
    <HomeStack.Screen name="ProfileScreen" component={ProfileScreen}/>
  </HomeStack.Navigator>

)

const TabScreen = () => (
  <Tabs.Navigator screenOptions={{headerShown:false}} >
    <Tabs.Screen name="Home Screen" component={HomeStackScreen} /> 
    <Tabs.Screen name="Calendar Screen" component={CalendarScreen}/> 
    <Tabs.Screen name="Profile Screen" component={ProfileScreen} />
  </Tabs.Navigator>

)

const RootStack = createStackNavigator();

const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator screenOptions={{headerShown:false}}>
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabScreen}
        options={{animationEnabled: false}}
        />
    ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          option={{
            animationEnabled: false
          }}
          />
    )}
  </RootStack.Navigator>

)

function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      login: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return <Text>Loading..</Text>;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        <RootStackScreen userToken={userToken}/>
      </NavigationContainer>

    </AuthContext.Provider>

  );
}

export default App;