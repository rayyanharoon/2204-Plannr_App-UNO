import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


const MainPage = ({navigation}) => {

    const gotToPage = (pageName) => {
        console.log("going to: " + pageName)
        navigation.navigate(pageName)
      }
    
    return (
        <View style={styles.container}>
            <Text>this is the main page</Text>
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

export default MainPage;
