import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';


const AddEventScreen = ({navigation}) => {

    const [eventName, onChangeEventName] = React.useState('')
    const [description, onChangeDesc] = React.useState('')
    //const [selectDate, onChangeSelectDate] = React.useState('')
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
        <Text style={styles.inputCalendar}>Select due date</Text>
        <Calendar style={styles.calendar}
            // Initially visible month. Default = Date()
            current={'2021-11-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            //if specific dates are inside it is greyed out
            minDate={''}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={''}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"MMMM yyyy"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={false}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            //firstDay = {0} starts from Sunday
            firstDay={0}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={(date) => {/*Return JSX*/}}
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
    inputCalendar: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        //aligned with calendar / calendar is a template
        marginBottom: -17,
        borderRadius: 10,
        color: 'black'
    },
    descstyle: {
        width: "90%",
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        height: 100
    },
    label: {
        fontSize: 18,
        //alignItems: 'stretch',
        fontFamily: 'monospace',
        marginBottom: 5,

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

export default AddEventScreen;
