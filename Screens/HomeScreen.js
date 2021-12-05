import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet,Button, Text, Modal, TouchableOpacity, TextInput, View, Keyboard } from 'react-native';
import ProfileScreen from './ProfileScreen';
import Task from './Task';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from "../context";


const HomeScreen = ({navigation}) => {
  const [isModalVisible, setModalVisibility] = React.useState(false);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

     {/* today's tasks */}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}> Today's tasks</Text>
      <ScrollView>
      <View style={styles.items}>
        {/* this is where the tasks will go~~~ */}
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => setModalVisibility(!isModalVisible)}>
                <Task text={item} />

              </TouchableOpacity>
            )
          })
        }
        
      </View>
      </ScrollView>
    </View>

    <Modal
    transparent={true}
    visible={isModalVisible}
    animationType='fade'
>
    <View style={{backgroundColor: "#000000aa", flex: 1}}>
        <View style={{backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1}}> 
        <Text stlye={{fontSize: 50}}> Modal Text</Text>
        {/* <ProfileScreen/> */}
        <Button title="close modal" onPress={()=>{setModalVisibility(!isModalVisible)}}/>
        </View>
        

    </View>
    
    </Modal>
    {/* write a task */}

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >

        
        {/* <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/> */}

        {/* add button just change on press func so it leads to add events */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>

        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B4162',
  },
  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,

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
  addText:{

  }
});

export default HomeScreen;
