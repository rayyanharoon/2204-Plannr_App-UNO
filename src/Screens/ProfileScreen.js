import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


const ProfileScreen = (navigation) => {

    
    return (
        <View style={styles.container}>
            <Text>this is the Profile Screen</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProfileScreen;
