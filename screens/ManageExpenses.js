
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/UI/iconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';

export default function ManageExpenses({route, navigation}) {
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

  }

  function cancelHandler (){

  }

  function confirmHandler(){}
 

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