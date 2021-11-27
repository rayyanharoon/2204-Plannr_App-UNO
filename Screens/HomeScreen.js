

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

import moment from 'moment'; 


var now = moment().format();

var currentDate = moment().format("YYYY/MM/DD");

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
const HomeScreen = ({navigation}) => {
    const [items, setItems] = React.useState({});

    const loadItems = (day) => {
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
          }
        }
        const newItems = {};
        Object.keys(items).forEach((key) => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 10);
    };
  
    const renderItem = (item) => {
      return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 17}}
                //goes to event that was pressed
                onPress={() => navigation.push("EventScreen") }>
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>{item.name}</Text>
                <Avatar.Text label="J" />
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={{flex: 1}}>
        <Agenda
       items={items}
       loadItemsForMonth={loadItems}
       selected={currentDate}
       renderItem={renderItem}
       showClosingKnob={true}
       onCalendarToggled={(calendarOpened) => {console.log("isCalendarOpen:" +calendarOpened)}}
       //get the day that was clicked in the draggable calendar
       onDayPress={(response) => console.log(response)}

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
    }
});

export default HomeScreen;
