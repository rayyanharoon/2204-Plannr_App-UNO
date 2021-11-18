import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

//import calendar module
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const CalendarScreen = (navigation) => {

    return (
        <View style={styles.container}>
            <Text>this is the Calendar Screen</Text>

            <Calendar
                // Initially visible month. Default = Date()
                current={'2021-11-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                //if specific dates are inside it is greyed out
                minDate={''}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={''}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MMM yyyy'}
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
                showWeekNumbers={true}
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
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={true}
                />

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

export default CalendarScreen;
