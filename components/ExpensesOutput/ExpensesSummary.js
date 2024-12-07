import { Text, View } from "react-native";


export default function ExpensesSummary({expenses, periodName}) {
    //calculating our expenses
    const expensesSum = expenses.reduce((sum, expenses)=> {
        return sum + expenses.amount
    }, 0)
  return (
    <View>
            <Text>{periodName}</Text>
            <Text>#{expensesSum.toFixed(2)}</Text>
        </View>
  )
}
