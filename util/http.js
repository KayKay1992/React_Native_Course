import axios from 'axios';

const BACKEND_URL = 'https://expense-tracker-app-2f4d7-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData){
 const response = await  axios.post(
   BACKEND_URL +  '/expenses.json', expenseData);
   const id = response.data.name;
   return id;
}

export async function fetchExpenses(){
 const response = await axios.get( BACKEND_URL + '/expenses.json');

 const expenses = [];

 for(const key in response.data){
  const expenseObj ={
    id: key,
    amount: response.data[key].amount,
    date: new Date(response.data[key].date),
    title: response.data[key].title,
  }
  expenses.push(expenseObj);
 }
 return expenses;
}