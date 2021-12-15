import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from "../context";


const ProfileScreen = (navigation) => {
    const {signOut} = React.useContext(AuthContext);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    const removeData = async () => {
        try{
            var user = {
                Username: username,
                Password: password,
                IsLoggedIn: false
            }
            await AsyncStorage.setItem('UserData', JSON.stringify(user));
            setIsLoggedIn('false');
            console.log(user)
            signOut();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Profile</Text>
            <Text style={styles.infoText}> Welcome {username}!</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.btnTxt} name="Logout" onPress={removeData}>Logout</Text>
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
        justifyContent: 'center'
    },
    label: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    infoText: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    btnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    logoutBtn: {
        backgroundColor: '#ffd700',
        padding: 15,
        width: "45%",
        marginBottom: 10,
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 15,
        textAlign: 'center'
    }

});

export default ProfileScreen;
