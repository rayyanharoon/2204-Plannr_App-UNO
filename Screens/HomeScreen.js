import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet,Button, Text, Modal, TouchableOpacity, TextInput, View, Keyboard } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddEventScreen from './AddEventScreen';
import EventScreen from './EventScreen';
import Event from './Event';

const HomeScreen = ({navigation}) => {
  const [isItemModalVisible, setItemModalVisibility] = React.useState(false);
  const [isAddEventModalVisible, setAddEventModalVisibility] = React.useState(false);
  
  const [itemData, setItemData] = React.useState('')
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const result = await AsyncStorage.getItem('events');
    console.log('getEvents successful')
    if(result !== null) setEvents(JSON.parse(result));
  }
  useEffect(() => {
    getEvents();
  }, [])


  const handleOnSubmit = async (eventName, description) => {
    const event = {
      id: Date.now(), 
      eventName, 
      description, 
      time: Date.now() 
    };
    console.log(event);
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    await AsyncStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const closeEventsHandler = () => {
    setItemModalVisibility(false)
  }
  
  const closeAddEventsHandler = () => {
    setAddEventModalVisibility(false)
  }

  const itemModalHandler = (item) => {
    setItemModalVisibility(true)
    setItemData(item);
    console.log(item.eventName)
  }

  const onCompleteHandler = async (id) => {
      console.log("completed " + id)
      let filterArray = events.filter((val, i) => {
        if (val.id !== id) {
          return val
        }
      })
      setEvents(filterArray)
      await AsyncStorage.setItem('events', JSON.stringify(filterArray));
  }

  return (
    <View style={styles.container}>

     {/* today's Events */}
    <View style={styles.eventWrapper}>
      <Text style={styles.sectionTitle}> Today's events</Text>
        <FlatList
          data={events} 
          keyExtractor={item => item.id.toString()} 
          renderItem={({item}) =>
           <Event 
              item={item} 
              onPress={()=>itemModalHandler(item)}
              onComplete={onCompleteHandler}
            />
          } 
        />
    </View>

    <EventScreen
      visible={isItemModalVisible}
      onClose={closeEventsHandler}
      item={itemData}
      />

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeEventWrapper}
      >

      <TouchableOpacity onPress={() => setAddEventModalVisibility(true) }>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>

      <AddEventScreen 
        visible={isAddEventModalVisible}
        onClose={closeAddEventsHandler}
        onSubmit={handleOnSubmit}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B4162',
  },
  eventWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
    //solves the cut flatlist at the bottom
    paddingBottom: 35
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom:10
  },
  items: {
    marginTop: 20
  },
  writeEventWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
});

export default HomeScreen;
