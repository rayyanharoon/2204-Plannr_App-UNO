import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

//npm install react-navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from './context';
import SignUpScreen from './src/Screens/SignUpScreen';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import CalendarScreen from './src/Screens/CalendarScreen';
//import CreateAnEvent from './src/Screens/CalendarScreen'

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
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
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="ProfileScreen" component={ProfileScreen}/>
    <HomeStack.Screen name="CalendarScreen" component={CalendarScreen}/>
  </HomeStack.Navigator>

)

const TabScreen = () => (
  <Tabs.Navigator headerMode="none">
    <Tabs.Screen name="HomeScreen" component={HomeStackScreen} /> 
    <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    <Tabs.Screen name="CalendarScreen" component={CalendarScreen}/>
  </Tabs.Navigator>

)

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
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


// export async function getServerSideProps(){
//   const data = await getUsers()

//   return {
//     props: {
//       users
//     }
//   }

// }