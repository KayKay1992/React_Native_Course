import { createContext, useReducer } from "react";


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({title, amount, date}) => {},
    setExpenses: (expenses) => {},
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
      return [{...action.payload, id: id}, ...state];
      
    case "SET":
      return action.payload;
     
    case "SET_FROM_API":

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
 const [expensesState, dispatch] = useReducer(expensesReducer, [])

 function addExpense(expenseData){
    dispatch({type: 'ADD', payload: expenseData})
 }
 function setExpenses(expenses){
    dispatch({type: 'SET', payload: expenses})
 }
 function deleteExpense(id){
    dispatch({type: 'DELETE', payload: id})
 }
 function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
 }

 const value = {
   expenses: expensesState,
   setExpenses: setExpenses,
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