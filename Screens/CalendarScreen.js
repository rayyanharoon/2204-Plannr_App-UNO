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
                // Initially visible month. Default = Date()
                current={'2021-12-01'}
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
                />

            {/* this should be a drop down menu */}
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="High" value="high" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Low" value="low" />
            </Picker>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} name="addevent" onPress={() => navigation.push('AddEventScreen')}>Next</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}
                            name='next'
                            onPress={() => navigation.push('AddEventScreen')}>Next</Text>
                    </TouchableOpacity> */}
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
    //don't know how to change the background to white
    // inputDropdown: {
    //     height: 50,
    //     width: 150,
    //     backgroundColor: '#fff',
    //     padding: 15,
    //     marginBottom: 10,
    //     borderRadius: 10,
    //     alignItems: 'center'
    // },
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
