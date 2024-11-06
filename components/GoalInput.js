
import { useState } from "react";
import { View, TextInput, Button , StyleSheet, Modal} from "react-native"

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
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}  value={enteredGoalText}/>
       <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.button}>
        <Button title='Cancel'/>
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
        marginBottom: 24,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        padding: 16,
       },
       textInput: {
        borderColor: '#cccccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
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
       
       }
})