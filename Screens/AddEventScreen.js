import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AddEventScreen = ({navigation}) => {

    const [event, setEventName] = useState('')
    const [desc, setDesc] = useState('')

    const [eventName, onChangeEventName] = React.useState('')
    const [description, onChangeDesc] = React.useState('')

    useEffect(() => {
        getEventData();
    }, []);

    const getEventData = () => {
        try {
          
            AsyncStorage.getItem('EventData')
                .then(value => {
                    if (value != null ) {
                        let user = JSON.parse(value);
                        setEventName(user.eventname);
                        setDesc(user.description);
                        //setIsLoggedIn(user.IsLoggedIn);
                        console.log("EventData successful")
                        
                    }
                    // if (isLoggedIn == true) {
                    //   login();
                    // } 
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventTitle}>Enter event name:</Text>

                <TextInput
                    style={styles.eventInput}
                    onChangeText={(value) => onChangeEventName(value)}
                    value={eventName}
                    placeholder={'Event Name'}
                />
                <TextInput
                    style={styles.descInput}
                    onChangeText={onChangeDesc}
                    value={description}
                    placeholder={'Description'}
                />
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.saveBtn}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B4162',
        //centers the text field in the screen
        alignItems: 'center',
        //places the text fields in the middle of the screen
        justifyContent: 'center',
    },
    eventTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    eventInput: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10
    },
    descInput: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10
    },
    buttonContainer: {
        // stacks the components in the container 
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%'
    },
    saveBtn: {
        backgroundColor: '#ffd700',
        padding: 15,
        width: "45%",
        marginBottom: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign:'center',
        borderRadius: 10
    }
  });

export default AddEventScreen;