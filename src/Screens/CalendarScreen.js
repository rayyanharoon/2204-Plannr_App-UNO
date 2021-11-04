import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

import * as Calendar from 'expo-calendar'


const CalendarScreen = (navigation) => {

    return (
        <View style={styles.container}>
            <Text>this is the Calendar Screen</Text>

            <View style={styles.btncontainer}>
            <Button
                title="Save"
                color="#196b21"
                onPress={() => Alert.alert('Saved event!')}
            />
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
    btnContainer: {
        // stacks the components in the container 
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
        }
});

export default CalendarScreen;
