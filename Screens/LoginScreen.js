import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from "../context";

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const {login} = React.useContext(AuthContext);
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [unInput, setUNInput] = useState('');
  const [pwInput, setPWInput] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
      getData();
  }, []);

  const getData = () => {
    try {
      
        AsyncStorage.getItem('UserData')
            .then(value => {
                if (value != null ) {
                    let user = JSON.parse(value);
                    setUsername(user.Username);
                    setPassword(user.Password);
                    setIsLoggedIn(user.IsLoggedIn);
                    console.log("getData successful")
                    
                }
                // if (isLoggedIn == true) {
                //   login();
                // } 
            })
    } catch (error) {
        console.log(error)
    }
}

  const validateLogin = () => {
    if (unInput != username || pwInput != password) {
            Alert.alert('Warning!', "Invalid Input.")
    } else {
      console.log("login successful")
      login();
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>plannr</Text>
      <Text style={styles.welcome}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(value) => setUNInput(value)}
        />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry 
        onChangeText={(value) => setPWInput(value)}/>

      <View style={styles.btnContainer}>
        
        {/* login button */}
        <TouchableOpacity
          style={styles.userBtn}
          onPress={validateLogin}>
          <Text
            style={styles.btnTxt}
            name="login">Login</Text>
        </TouchableOpacity>

        {/* sign up button */}
        <TouchableOpacity 
          style={styles.userBtn2}
          onPress={() => navigation.push("SignUpScreen")}>
          <Text
            style={styles.btnTxt}
            name="signUp"
            >Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B4162',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 55,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    // fontFamily: 'Arial',
    color: '#fff',
  },
  input: {
    width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  },
  btnContainer: {
    // stacks the components in the container 
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%'
    },
  userBtn: {
    backgroundColor: '#ffd700',
    padding: 15,
    width: "45%",
    marginBottom: 10,
    borderRadius: 10
  },
  userBtn2: {
    backgroundColor: '#CD9D51',
    padding: 15,
    width: "45%",
    marginBottom: 10,
    borderRadius: 10
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center'
  }


});


export default LoginScreen;