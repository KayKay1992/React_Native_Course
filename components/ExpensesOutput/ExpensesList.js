import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData){
    // Render each expense item here
  return <Text>{itemData.item.title}</Text>
}
export default function ExpensesList({expenses}) {
  return (
  <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
  )
}
