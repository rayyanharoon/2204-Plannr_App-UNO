import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from "../context";


const ProfileScreen = ({navigation}) => {

    const {signOut} = React.useContext(AuthContext);
    
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('Username')
                .then(value => {
                    if (value != null ) {
                        //let user = JSON.parse(value);
                        setLoginUser(value);
                        setLoginPassword(value);
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            signOut();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Profile</Text>
            <Text style={styles.infoText}> Welcome {loginUser}!</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10,
        color: '#000',
    },
    infoText: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#000'
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
