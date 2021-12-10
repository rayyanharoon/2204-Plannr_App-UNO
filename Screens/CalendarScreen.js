import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';

//adding the calendar template
import {Calendar} from 'react-native-calendars';

const CalendarScreen = ({navigation}) => {

    const [selectedValue, setSelectedValue] = useState("high");

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Select the date:</Text>

            {/* going to change this to pop-up calendar or date picker */}
            <Calendar style={styles.calendar}
                current={'2021-12-01'}
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
            {/* <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="High" value="high" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Low" value="low" />
            </Picker> */}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} 
                        onPress={() => navigation.push("AddEventScreen")}>Next</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
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
    input: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10
    },
    inputCalendar: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        //aligned with calendar / calendar is a template
        marginBottom: -17,
        borderRadius: 10,
        color: 'black'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold'
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
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign:'center',
        borderRadius: 10
    },
    calendar: {
        borderWidth: 0,
        borderRadius: 10,
        borderColor: 'white',
        height: 365,
        marginBottom: 10,
        width: 370
    }
  });

export default CalendarScreen;
