import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expensesContext";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";


export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true)
  const expensesCotx = useContext(ExpensesContext)
 

  useEffect(() => {
    setIsFetching(true)
    async function getExpenses(){
    const expenses =  await fetchExpenses()
    setIsFetching(false)
    expensesCotx.setExpenses(expenses)
    }
   getExpenses();
  }, [])

  if(isFetching){
    return <LoadingOverlay/>
  } 

  const recentExpenses = expensesCotx.expenses.filter((expense) => { const today = new Date();
    const date7DaysAgo =getDateMinusDays(today, 7)
    return(expense.date > date7DaysAgo) && (expense.date <=today)
  })
  return (
   <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' fallbackText='No expenses registered for the last 7days'/> 
  )
}
