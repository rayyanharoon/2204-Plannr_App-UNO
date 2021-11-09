import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { AuthContext } from "../../context";


//let usernameTF;
//let passwordTF;

const LoginScreen = ({navigation}) => {

    const {login} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>plannr</Text>
      <Text style={styles.welcome}>Login</Text>
      <TextInput style={styles.input} placeholder="Username"/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <View style={styles.btnContainer}>
        
        {/* login button */}
        <TouchableOpacity style={styles.userBtn}>
          <Text  style={styles.btnTxt} name="login" onPress={() => login()}>Login</Text>
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

const handleLogin = async () => {
  const data = {
    username,
    password
  }
}

export async function getServerSideProps(){
  const data = await getUsers()

  return {
    props: {
      users
    }
  }

}