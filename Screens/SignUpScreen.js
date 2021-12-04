import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from "../context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {

  const {signUp} = React.useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
      getData();
  }, []);

    // automatically logins if theres a username already stored
  const getData = () => {
      try {
          AsyncStorage.getItem('UserData')
              .then(value => {
                  if (value != null ) {
                    console.log('logging in username: ' + username)
                    signUp();
                  }
              })
      } catch (error) {
          console.log(error)
      }
  }
  const setData = async () => {
    if(username.length < 5 || password.length < 8) {
      Alert.alert('Warning!', "Invalid Input.")
    } else {
      try{
        var user = {
          Username: username,
          Password: password
        }

        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        console.log('data stored successfully.' )
        signUp();
      } catch (error){
        console.log(error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>plannr</Text>
      <Text style={styles.welcome}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(value) => setUsername(value)}
        />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry 
        onChangeText={(value) => setPassword(value)}/>

      {/* all the buttons are in the btnContainer view */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={setData}>
          <Text style={styles.btnTxt} >Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userBtn} onPress={() => navigation.push("LoginScreen")}>
          <Text style={styles.btnTxt}>Cancel</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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


export default SignUpScreen;