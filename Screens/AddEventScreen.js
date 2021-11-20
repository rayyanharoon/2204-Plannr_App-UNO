import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


const AddEventScreen = ({navigation}) => {

    // some calendar class 
    // name, date and time(?)
    const [eventName, onChangeEventName] = React.useState('')
    const [description, onChangeDesc] = React.useState('')
    const [selectDate, onChangeSelectDate] = React.useState('')
    const [priority, onChangePriority] = React.useState('')

    return (
        <View style={styles.container}>

        <Text style={styles.title}>Create An Event</Text>

        <TextInput
            style={styles.input}
            onChangeText={onChangeEventName}
            value={eventName}
            placeholder={'Event Name'}
        />

        <TextInput
            style={styles.descstyle}
            onChangeText={onChangeDesc}
            value={description}
            placeholder={'Description'}
        />

        {/* going to change this to pop-up calendar or date picker */}
        <TextInput
            style={styles.input}
            onChangeText={onChangeSelectDate}
            value={selectDate}
            placeholder={'Select Due Date'}
        />

        {/* this should be a drop down menu */}
        <TextInput
            style={styles.input}
            onChangeText={onChangePriority}
            value={priority}
            placeholder={'Select Priority'}
        />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.push("HomeScreen")}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
        //centers the text field in the screen
        alignItems: 'center',
        //places the text fields in the middle of the screen
        justifyContent: 'center',
    },
    input: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10
    },
    descstyle: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        height: 150
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    buttonContainer: {
        // stacks the components in the container 
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    button: {
        backgroundColor: '#ffd700',
        padding: 15,
        width: "45%",
        marginBottom: 10,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        textAlign:'center'
    }
  });

export default AddEventScreen;
