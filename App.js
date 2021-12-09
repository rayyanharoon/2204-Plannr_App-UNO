import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

//npm install react-navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from './context';
import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AddEventScreen from './Screens/AddEventScreen';
import EventScreen from './Screens/EventScreen';


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
    <HomeStack.Screen name="AddEventScreen" component={AddEventScreen}/>
    <HomeStack.Screen name="ProfileScreen" component={ProfileScreen}/>
    <HomeStack.Screen name="EventScreen" component={EventScreen}/>
  </HomeStack.Navigator>

)

const TabScreen = () => (
  <Tabs.Navigator screenOptions={{headerShown:false}}>
<<<<<<< HEAD
    <Tabs.Screen 
      name="Home" 
      component={HomeStackScreen} 
      options={{
        tabBarLabel:'Home',
        tabBarIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>),
      }} /> 
    <Tabs.Screen
      name="Calendar" 
      component={AddEventScreen}
      options={{
        tabBarLabel:'Calendar',
        tabBarIcon: ({color, size}) => (<Ionicons name='calendar' color={color} size={size}/>)
      }}/> 
    <Tabs.Screen 
      name="My Profile" 
      component={ProfileScreen}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon: ({color, size}) => (<Ionicons name='book' color={color} size={size}/>)
      }} />
=======
  {/* screenOptions={({route})=>({
    tabBarIcon:({focused, size, color})=>{
      let iconName;
      if(route.name==='HomeScreen') {
        iconName='home';
        size = focused?25:20;
        color = focused?'#f0f':'#555';
      } else if(route.name==='AddEvent') {
        iconName='calendar';
        size = focused?25:20;
      } else if(route.name==='ProfileScreen') {
        iconName='user';
        size = focused?25:20;
      }
      return(
        <FontAwesome5
          name={iconName}
          size={size}
          color={color}
        />
      )
    }
  })}} */}
    <Tabs.Screen name="Home" component={HomeStackScreen} /> 
    <Tabs.Screen name="Calendar" component={AddEventScreen}/> 
    <Tabs.Screen name="My Profile" component={ProfileScreen} />
>>>>>>> 813f996d80100f21610ddcbe07edddb35f5e3e88
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