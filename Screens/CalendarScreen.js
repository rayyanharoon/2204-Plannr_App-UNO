import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'



LocaleConfig.locales['data'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayNanes: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    today: 'today'
}

LocaleConfig.defaultLocale = 'data'

{/* <Calendar
    current = {'2021-10-01'}
/> */}
