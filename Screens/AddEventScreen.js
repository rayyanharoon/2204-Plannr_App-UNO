import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


const AddEventScreen = (navigation) => {

    // some calendar class 
    // name, date and time(?)

    


    return (
        <View style={styles.container}>
                 
                 <Text>This is the Add Event Screen! if you see this message, then there has absolutely been no progress that occured in this Screen. :)</Text> 

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

export default AddEventScreen;
