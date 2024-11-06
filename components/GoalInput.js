
import { useState } from "react";
import { View, TextInput, Button , StyleSheet} from "react-native"

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
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}  value={enteredGoalText}/>
       
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginBottom: 24,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flex: 1,
       },
       textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginRight: 10,
       }, 
})