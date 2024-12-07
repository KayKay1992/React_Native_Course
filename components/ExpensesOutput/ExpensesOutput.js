
import { View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

export default function ExpensesOutput({expenes}) {
  return (
    <View>
        <ExpensesSummary/>
        <ExpensesList/>
        
    </View>
  )
}
