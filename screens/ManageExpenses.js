
import { useLayoutEffect } from 'react';
import { Text } from 'react-native'

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

 

  return (
    <Text>AllExpenses</Text>
  )
}
