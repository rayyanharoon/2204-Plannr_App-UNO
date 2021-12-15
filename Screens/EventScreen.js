import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Modal, View, TouchableOpacity, Button} from 'react-native';


const EventScreen = ({navigation, item, visible, onClose}) => {
    const {eventName, description} = item;

    return(
        <Modal visible={visible} transparent={true}>
        <View style={styles.container}>
            <Text style={styles.eventName}>{eventName}</Text>
            <Text style={styles.eventDesc}>{description}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.backBtn} onPress={onClose}>
                    <Text style={styles.btnTxt}  >Back</Text>
                </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B4162',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eventName: {
        textAlign: 'center',
        padding: 15,
        fontSize: 30,
        paddingBottom:20
    },
    eventDesc: {
        padding: 15,

        fontSize: 15
    },
    btnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    backBtn: {
        marginTop:50,

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
})

export default EventScreen;
