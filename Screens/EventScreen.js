import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Modal, View, TouchableOpacity, Button} from 'react-native';
import { AuthContext } from "../context";


class EventScreen extends React.Component {
    constructor(){
        super();
        this.state={show: false}
    }

    render() {
        return(
            <View style={{flex: 1, marginTop: 100}}>
                <Text style={{fontSize: 80}}>Normal Screen text</Text>
                <Button title="show modal" onPress={()=>{this.setState({show:true})}}/>
                <Modal
                    transparent={true}
                    visible={this.state.show}
                    animationType='fade'
                >
                    <View style={{backgroundColor: "#000000aa", flex: 1}}>
                        <View style={{backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1}}> 
                            <Text stlye={{fontSize: 50}}> Modal Text</Text>
                            <Button title="close modal" onPress={()=>{this.setState({show:false})}}/>
                        </View>

                    </View>
                    
                    </Modal>
                
            </View>
        )
    }

}
// const EventScreen = (navigation) => {
//     const {signOut} = React.useContext(AuthContext);
    
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Profile</Text>
//             <Text style={styles.infoText}> Firstname Lastname ~{"\n"} Username {"\n"} Email</Text>
//             <View style={styles.btnContainer}>
//                 <TouchableOpacity style={styles.logoutBtn}>
//                     <Text style={styles.btnTxt} name="Logout" onPress={() => signOut()}>Logout</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }


// });

export default EventScreen;
