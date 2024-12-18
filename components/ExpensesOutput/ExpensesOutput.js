
import { StyleSheet, Text, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'



export default function ExpensesOutput({expenses, expenesPeriod, fallbackText}) {
  let  content = <Text style={styles.infoText}>{fallbackText}</Text>
  if(expenses.length > 0){
    content = <ExpensesList expenses={expenses}/>
  }
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expenesPeriod}/>
       {content}
        
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
    
   },
   infoText: {
     color: 'white',
     fontSize: 16,
     marginTop: 30,
     textAlign: 'center',

   },
})  
