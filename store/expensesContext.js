import { createContext, useReducer } from "react";


const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Rent', amount: 1000, date: new Date('2022-07-15') },
  { id: 'e2', title: 'Milk', amount: 50, date: new Date('2022-07-10') },
  { id: 'e3', title: 'Groceries', amount: 120, date: new Date('2022-07-05') },
  { id: 'e4', title: 'Phone bill', amount: 500, date: new Date('2022-06-20') },
  { id: 'e5', title: 'Car payment', amount: 450, date: new Date('2022-06-15') },
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({title, amount, date}) => {},
    removeExpense: (id) => {},
    updateExpense: (id, {title, amount, date }) => {},


    //Some other functions you can use here
    // getExpenseById: () => {},
    // getTotalExpenses: () => {},
    // getCategoryExpenses: () => {},
    // getTopThreeExpenses: () => {},
    // getRecentExpenses: () => {},
    // getExpensesByDate: () => {},
    // getExpensesByCategory: () => {},
    // getExpensesByAmountRange: () => {},
    // getExpensesByDescription: () => {},
    // getExpensesByTag: () => {},
    // getExpensesByMultipleCriteria: () => {},
    // getExpensesByDateRange: () => {},
    // getExpensesByLocation: () => {},
    // getExpensesByMultipleLocation: () => {},
    // getExpensesByMultipleTags: () => {},
    // getExpensesByMultipleCriteriaAndLocation: () => {},
})

function expensesReducer(state, action){
  switch(action.type){
    case "ADD":
      const id = new Date().toDateString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state]
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const updatebleExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatebleExpense = state[updatebleExpenseIndex];
      const updatedItem = {...updatebleExpense, ...action.payload.data};
      const updatedExpenses = [...state]
      updatedExpenses[updatebleExpenseIndex] = updatedItem;
      return updatedExpenses;
    
    default:
      return state;
  }
}

function  ExpensesContextProvider({children}){
 const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

 function addExpense(expenseData){
    dispatch({type: 'ADD', payload: expenseData})
 }
 function deleteExpense(id){
    dispatch({type: 'DELETE', payload: id})
 }
 function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
 }

 const value = {
   expenses: expensesState,
   addExpense: addExpense,
   deleteExpense: deleteExpense,
   updateExpense: updateExpense,
   //Some other functions you can use here
   // getExpenseById: getExpenseById,
   // getTotalExpenses: getTotalExpenses,
   // getCategoryExpenses: getCategoryExpenses,
   // getTopThreeExpenses: getTopThreeExpenses,
   // getRecentExpenses: getRecentExpenses,
   // getExpensesByDate: getExpensesByDate,
   // getExpensesByCategory: getExpensesByCategory,
   // getExpensesByAmountRange: getExpensesByAmountRange,
   // getExpensesByDescription: getExpensesByDescription,
   // getExpensesByTag: getExpensesByTag,
   // getExpensesByMultipleCriteria: getExpensesByMultipleCriteria,
   // getExpensesByDateRange: getExpensesByDateRange,
   // getExpensesByLocation: getExpensesByLocation,
 };
  return <ExpensesContext.Provider value={value}>
{children}
  </ExpensesContext.Provider>
}

export default ExpensesContextProvider;