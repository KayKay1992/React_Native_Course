
import { useState } from 'react';
import { StyleSheet, View,  FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);


  //modal visiblity functionality
  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    // Add your code here to add the goal to the list
    setCourseGoals((currentCourseGoals) =>[...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()},]);
    endAddGoalHandler();


  }

  function deleteGoalHandler(deleteGoalId) {
    // Add your code here to delete a goal from the list
    setCourseGoals((currentCourseGoals) => currentCourseGoals.filter((goal) => goal.id!== deleteGoalId));
  
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add new goal'color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      
       {/* Display goals here */}
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData=> {
        
       return  (
        <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
       )  
       
      }} keyExtractor={(item, inddex)=> {
        return item.id;
      }}/>
       
      
      
      </View>
     
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  backgroundColor: '#1e085a',
  paddingTop: 50,
  paddingHorizontal: 16,
 },

 goalsContainer: {
  flex: 5,

 },
 
});
