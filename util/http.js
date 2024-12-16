import axios from 'axios';

export function storeExpense(expenseData){
  axios.post('https://expense-tracker-app-2f4d7-default-rtdb.firebaseio.com/expenses.json', expenseData);
}