import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Event = ({item, onPress, onComplete}) => {
    const {id, eventName, description} = item;


    const handleOnComplete = () => {
        onComplete(id)
    }
    return (
        <TouchableOpacity onPress={onPress} style = {styles.item}>
            <TouchableOpacity style={styles.square} onPress={() => handleOnComplete()}></TouchableOpacity>

            <View style={styles.leftSide}>
                <Text style={styles.eventName}>{eventName}</Text>
            </View>

            <View style={styles.rightSide}>
                <Text style={styles.eventTime}>12:00 PM</Text>
            </View>
        

        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    leftSide: {
        flexDirection: 'column',
        width: 170
    },
    rightSide: {
        flexDirection: 'row',

    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 7,
        borderColor: '#55bcf6',
        borderWidth: 5,
        marginRight: 15
    },
    eventName: {
        textAlign: 'left',
        padding: 3,
        fontSize: 17,
        maxWidth: '80%'
        
    },
    eventDesc: {
        fontSize: 17,
        textAlign: 'left',
        padding: 3
    },
    eventTime: {
        fontSize: 20,
        marginRight: 4,
    }
});

export default Event;