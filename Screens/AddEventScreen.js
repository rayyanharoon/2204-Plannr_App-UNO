import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const AddEventScreen = ({navigation}) => {

    const [eventName, onChangeEventName] = React.useState('');
    const [eventName, onChangeEventName] = React.useState('')
    const [description, onChangeDesc] = React.useState('')

    const [selectedValue, setSelectedValue] = useState("high");

    return (
        <View style={styles.container}>
            <Text style={styles.eventTitle}>Enter event name:</Text>

                <TextInput
                    style={styles.eventInput}
                    onChangeText={onChangeEventName}
                    value={eventName}
                    placeholder={'Event Name'}
                />
                {/* going to change this to pop-up calendar or date picker */}
                <Text style={styles.inputCalendar}>Select due date</Text>
                <Calendar style={styles.calendar}
                current={'2021-11-01'}
                minDate={''}
                maxDate={''}
                onDayPress={(day) => {console.log('selected day', day)}}
                monthFormat={"MMMM yyyy"}
                onMonthChange={(month) => {console.log('month changed', month)}}
                hideExtraDays={false}
                disableMonthChange={false}
                firstDay={0}
                hideDayNames={false}
                showWeekNumbers={false}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableArrowLeft={false}
                disableArrowRight={false}
                disableAllTouchEventsForDisabledDays={true}
                />

                {/* this should be a drop down menu */}
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150, color:'#fff' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="High" value="high" color="#fff" />
                    <Picker.Item label="Medium" value="medium" color="#fff" />
                    <Picker.Item label="Low" value="low" color="#fff" />
                </Picker>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.push("HomeScreen")}>
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
    }
  });

export default AddEventScreen;