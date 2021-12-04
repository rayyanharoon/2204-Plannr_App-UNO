import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from "../context";
// import {Animatable} from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';


// let usernameTF;
// let passwordTF;

const LoginScreen = ({navigation}) => {

    const {login} = React.useContext(AuthContext);

    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const setData = async () => {
        //error: logs in even without password
        if (loginUser.length == 0 && loginPassword.length == 0) {
            Alert.alert('Please enter your username and password')
        } else {
            try {
              //this stores the username and password in async storage
              await AsyncStorage.setItem('Username', loginUser);
              await AsyncStorage.setItem('Password', loginPassword);
              
              // this allows the user to navigate to the next screen
              login()

          } catch (e) {
            // saving error
            console.log(e)
          }
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>plannr</Text>
      <Text style={styles.welcome}>Login</Text>
      <TextInput 
          style={styles.input} 
          placeholder="Username"
          onChangeText={(value)=>setLoginUser(value)} 
        />
      
      {/* <Animatable.View animation="fadeInLeft" duration={500}/> */}
      {/* <Text style={styles.errorMsg}> Invalid Username. </Text> */}

      <TextInput 
            style={styles.input}
            placeholder="Password"
            onChangeText={(value)=>setLoginPassword(value)}
            secureTextEntry/>

      <View style={styles.btnContainer}>
        
        {/* login button */}
        <TouchableOpacity style={styles.userBtn}>
          <Text  style={styles.btnTxt} name="login" onPress={setData}>Login</Text>
        </TouchableOpacity>

        {/* sign up button */}
        <TouchableOpacity style={styles.userBtn} >
          <Text style={styles.btnTxt} name="signUp" onPress={() => navigation.push("SignUpScreen")}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 55,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontFamily: 'monospace'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
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
  btnTxt: {
    fontSize: 18,
    textAlign: 'center'
  }


});


export default LoginScreen;