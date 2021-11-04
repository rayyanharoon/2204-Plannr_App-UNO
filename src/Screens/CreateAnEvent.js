//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


const CreateAnEvent = () => {

    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Event Name'/>
            <TextInput style={styles.input} placeholder='Description'/>
            {/* need a dropdown menu */}
            <TextInput style={styles.input} placeholder='Select a due date'/>
            <TextInput style={styles.input} placeholder='Select event priority'/>

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

export default ProfileScreen;
