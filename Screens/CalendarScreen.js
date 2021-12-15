import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';

//adding the calendar template
import {Calendar} from 'react-native-calendars';

const CalendarScreen = ({navigation}) => {

    var today = new Date();

    return (
        <View style={styles.container}>

            <Calendar style={styles.calendar}
                current={today}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B4162',
        alignItems: 'center',
        justifyContent: 'center',
    },

    calendar: {
        borderWidth: 0,
        borderRadius: 20,
        borderColor: 'white',
        height: 365,
        marginBottom: 10,
        width: 370

    }
  });

export default CalendarScreen;
