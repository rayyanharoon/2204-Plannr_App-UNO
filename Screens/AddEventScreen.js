import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Modal, TouchableOpacity, Keyboard} from 'react-native';

const AddEventScreen = ({navigation, onSubmit,visible, onClose,}) => {

    const [eventName, setEventName] = React.useState('')
    const [description, setEventDesc] = React.useState('')
   
    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === 'eventName')  setEventName(text);
        if (valueFor === 'description') setEventDesc(text);
    }
    
    const handleSubmit = () => {
        onSubmit(eventName, description);
        setEventName('');
        setEventDesc('');
        onClose();
    }

    const handleModalClose = () => {
        setEventName('');
        setEventDesc('');
        onClose()
    }

    return (
        <Modal visible={visible} transparent={true}>
        <View style={styles.container}>
            <Text style={styles.eventTitle}>Enter event name:</Text>

                <TextInput
                    style={styles.eventInput}
                    onChangeText={text => handleOnChangeText(text, 'eventName')}
                    value={eventName}
                    placeholder={'Event Name'}
                />
                <TextInput
                    style={styles.descInput}
                    onChangeText={text => handleOnChangeText(text, 'description')}
                    value={description}
                    placeholder={'Description'}
                />
                
                <View style={styles.buttonContainer}>

                    {/* save button appears when inputs are filled */}
                    {eventName.trim() && description.trim() ? (
                    <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => handleSubmit()}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>) : null}

                    <TouchableOpacity
                        style={styles.cancelBtn}
                        onPress={handleModalClose}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B4162',
        alignItems: 'center',
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
    cancelBtn: {
        backgroundColor: '#ffd700',
        padding: 15,
        width: "45%",
        marginBottom: 10,
        borderRadius: 10,
    },
    addBtn: {
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