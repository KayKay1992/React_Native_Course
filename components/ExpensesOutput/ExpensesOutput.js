
import { View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

export default function ExpensesOutput({expenses, expenesPeriod}) {
  return (
    <View>
        <ExpensesSummary expenses={expenses} periodName={expenesPeriod}/>
        <ExpensesList/>
        
    </View>
  )
}
