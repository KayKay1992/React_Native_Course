
import { StyleSheet, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'



export default function ExpensesOutput({expenses, expenesPeriod}) {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expenesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
    
   }
})  
