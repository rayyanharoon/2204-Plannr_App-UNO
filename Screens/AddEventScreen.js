import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const AddEventScreen = ({navigation}) => {

    const [eventName, onChangeEventName] = React.useState('');
        return (
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEventName}
                value={eventName}
                placeholder={'Event Name'}
            />
            </View>
        )            
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
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#fff',
    },
    buttonContainer: {
        // stacks the components in the container 
        flexDirection: 'column',
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