
import { useState } from "react";
import { View, TextInput, Button , StyleSheet, Modal, Image} from "react-native"

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        // Add your code here to add a new goal to the list
        setEnteredGoalText(enteredText)
      }

      function addGoalHandler() {
        // Add your code here to add the goal to the list
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }
  return (
    <Modal visible={props.visible} animationType="slide">

    <View style={styles.inputContainer}>
       <Image style={styles.image} source={require('../assets/images/star.png')} />
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}  value={enteredGoalText}/>
       <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc'/>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
        </View>
       
       </View>
       
      </View>
      </Modal>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
       },
       textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderWidth: 1,
        padding: 16,
        borderRadius: 9,
        width: '80%',
        marginRight: 10,
       }, 
       buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
       },
       button: {
        width: 100,
        marginHorizontal: 10,
       
       },
       image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 24,
       }
})