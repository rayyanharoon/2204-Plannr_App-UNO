import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { AuthContext } from "../context";

const SignUpScreen = (navigation) => {

  const {signUp} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>plannr</Text>
      <Text style={styles.welcome}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username"/>
      <TextInput style={styles.input} placeholder="Email"/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* all the buttons are in the btnContainer view */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.btnTxt} onPress={() => signUp()}>Create Account</Text>
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