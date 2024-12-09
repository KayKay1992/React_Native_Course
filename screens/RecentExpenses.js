import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expensesContext";
import { getDateMinusDays } from "../util/date";


export default function RecentExpenses() {
  const expensesCotx = useContext(ExpensesContext)

  const recentExpenses = expensesCotx.expenses.filter((expense) => { const today = new Date();
    const date7DaysAgo =getDateMinusDays(today, 7)
    return(expense.date > date7DaysAgo) && (expense.date <=today)
  })
  return (
   <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days'/> 
  )
}
