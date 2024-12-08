
import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/UI/iconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expensesContext';

export default function ManageExpenses({route, navigation}) {
 const expensesCtx =  useContext(ExpensesContext)
  const edittedExpenseId = route.params?.expenseId;
  // Implement logic to fetch expense data and handle editing or creating a new expense based on edittedExpenseId.
  // (!!) is used to convert value into boolean
  const isEditing = !!edittedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    }, [navigation, isEditing])
  })
  
  function deleteExpenseHandler(){
    expensesCtx.deleteExpense(edittedExpenseId)
    navigation.goBack()
  }

  function cancelHandler (){
     navigation.goBack()
  }

  function confirmHandler(){
    // Implement logic to save or update expense data based on edittedExpenseId.
    if(isEditing){
      expensesCtx.updateExpense(
        edittedExpenseId,
        {
        title: 'Test',
        amount: 1000,
        date: new Date('2023-01-3')
      })
    }else {
      expensesCtx.addExpense({
        title: 'Test!!!',
        amount: 1000.00,
        date: new Date('2024-01-3')
      }) 
    }
    navigation.goBack()
  }
 

  return (
    <View style={styles.container}>
      {/* Adding buttons closing d modals without editing, closing the modal after editing and deleting */}
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.buttton}>Cancel</Button>
        <Button onPress={confirmHandler} style={styles.buttton}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing &&
      <View style={styles.deleteContainer}>
       <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
       </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
   
  },
  buttons: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  buttton: {
    minWidth: 120,
    paddingHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  }
});