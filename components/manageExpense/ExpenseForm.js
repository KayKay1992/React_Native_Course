import {  View,  } from "react-native";
import Input from "./Input";


export default function ExpenseForm() {
    function amountChangeHandler(){

    }
  return (
  <View>
    <Input label='Amount' TextInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangeHandler
  
    }} />
    <Input label='Date' TextInputConfig={{
        placeholder: 'yyyy-MM-dd',
        maxLength: 10,
        onChangeDate: ()=>{}
    }}/>
    <Input  label='Title' TextInputConfig={{
        multiline: true,
        // numberOfLines: 3,
        // autoCorrect: false,

    }}/>
  </View>
  )
}
