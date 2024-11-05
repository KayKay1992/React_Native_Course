
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText){
    // Add your code here to add a new goal to the list
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    // Add your code here to add the goal to the list
    setCourseGoals((currentCourseGoals) =>[...currentCourseGoals, enteredGoalText])

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView >
        {/* Display goals here */}
       {courseGoals.map((goal) => (
        <View style={styles.goalItem} key={goal}>
        <Text style={styles.goalText}>{goal}</Text>
         </View>))}
      </ScrollView>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
 
  paddingTop: 50,
  paddingHorizontal: 16,
 },
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
 goalsContainer: {
  flex: 5,

 },
 goalItem: {
  padding: 10,
  backgroundColor: '#5e0acc',
  margin: 10,
  borderRadius: 6,
  
 },
 goalText : {
  color: 'white',
 },
});
