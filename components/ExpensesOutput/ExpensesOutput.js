
import { View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Rent', amount: 1000, date: new Date('2022-07-15') },
    { id: 'e2', title: 'Milk', amount: 50, date: new Date('2022-07-10') },
    { id: 'e3', title: 'Groceries', amount: 120, date: new Date('2022-07-05') },
    { id: 'e4', title: 'Phone bill', amount: 500, date: new Date('2022-06-20') },
    { id: 'e5', title: 'Car payment', amount: 450, date: new Date('2022-06-15') },
]

export default function ExpensesOutput({expenses, expenesPeriod}) {
  return (
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expenesPeriod}/>
        <ExpensesList/>
        
    </View>
  )
}
