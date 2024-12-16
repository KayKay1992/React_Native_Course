
import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native'
import IconButton from '../components/UI/iconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expensesContext';
import ExpenseForm from '../components/manageExpense/ExpenseForm';
import { storeExpense } from '../util/http';

export default function ManageExpenses({route, navigation}) {
 const expensesCtx =  useContext(ExpensesContext)
  const edittedExpenseId = route.params?.expenseId;
  // Implement logic to fetch expense data and handle editing or creating a new expense based on edittedExpenseId.
  // (!!) is used to convert value into boolean
  const isEditing = !!edittedExpenseId

  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === edittedExpenseId);

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

  function confirmHandler(expenseData){
    // Implement logic to save or update expense data based on edittedExpenseId.
    if(isEditing){
      expensesCtx.updateExpense(
        edittedExpenseId,
       expenseData)
    }else {
      storeExpense(expenseData)
      expensesCtx.addExpense(expenseData) 
    }
    navigation.goBack()
  }
 

  return (
    <View style={styles.container}>
      <ExpenseForm submitButtonLabel={isEditing? 'Update' : 'Add'} onCancel={cancelHandler} onSubmit={confirmHandler} defaultValues={selectedExpense}/>
      {/* Adding buttons closing d modals without editing, closing the modal after editing and deleting */}
      
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
  
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  }
});