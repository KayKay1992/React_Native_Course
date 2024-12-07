import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData){
    // Render each expense item here
  return <ExpenseItem {...itemData.item}/>
}
export default function ExpensesList({expenses}) {
  return (
  <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
  )
}
