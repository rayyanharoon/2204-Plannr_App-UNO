import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

import { AuthContext } from "../context";



const ProfileScreen = (navigation) => {
    const {signOut} = React.useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Profile</Text>
            <Text style={styles.infoText}> Firstname Lastname ~{"\n"} Username {"\n"} Email</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.btnTxt} name="Logout" onPress={() => signOut()}>Logout</Text>
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
