
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { Dimensions } from 'react-native';

const CalendarScreen = (navigation) => {

    ////    CHANGE CALENDAR Screen TO SOMETHING ELSE!
    return (
        <View style={styles.container}>
             
            <Text>This is a blank Screen! if you see this message, then there has absolutely been no progress that occured in this Screen. :)</Text> 
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

export default CalendarScreen;
