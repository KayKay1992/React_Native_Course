
import { useState } from 'react';
import { StyleSheet, View,  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // Add your code here to add the goal to the list
    setCourseGoals((currentCourseGoals) =>[...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);

  }

  function deleteGoalHandler(deleteGoalId) {
    // Add your code here to delete a goal from the list
    setCourseGoals((currentCourseGoals) => currentCourseGoals.filter((goal) => goal.id!== deleteGoalId));
  
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      
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
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
 
  paddingTop: 50,
  paddingHorizontal: 16,
 },

 goalsContainer: {
  flex: 5,

 },
 
});
