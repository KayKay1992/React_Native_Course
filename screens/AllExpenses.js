
import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expensesContext'

export default function AllExpenses() {
  const expensesCotx = useContext(ExpensesContext)
  return (
    <ExpensesOutput expenses={expensesCotx.expenses} expenesPeriod='Total'/>
  )
}
