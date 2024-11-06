
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText){
    // Add your code here to add a new goal to the list
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    // Add your code here to add the goal to the list
    setCourseGoals((currentCourseGoals) =>[...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}]);

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
       {/* Display goals here */}
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData=> {
        
       return  (
        <GoalItem text={itemData.item.text} />
       )  
       
      }} keyExtractor={(item, inddex)=> {
        return item.id;
      }}/>
       
      
      
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
 
});
