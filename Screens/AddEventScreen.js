import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const AddEventScreen = ({navigation}) => {

    const [eventName, onChangeEventName] = React.useState('');
        return (
    const [eventName, onChangeEventName] = React.useState('')
    const [description, onChangeDesc] = React.useState('')

    const [selectedValue, setSelectedValue] = useState("high");

    return (
        <View style={styles.container}>

        <Text style={styles.title}>Create an Event</Text>

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
        )
    </View>          
})

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