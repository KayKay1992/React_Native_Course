import {  StyleSheet, Text, View,  } from "react-native";
import Input from "./Input";


export default function ExpenseForm() {
    function amountChangeHandler(){

    }
  return (
  <View style={styles.formStyle

  }>
    <Text style={styles.title}>Your Expense</Text>
    <View style={styles.inputsRow}>
    <Input style={styles.rowInput} label='Amount' textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangeHandler
  
    }} />
    <Input style={styles.rowInput} label='Date' textInputConfig={{
        placeholder: 'yyyy-MM-dd',
        maxLength: 10,
        onChangeDate: ()=>{}
    }}/>
    </View>
    <Input  label='Title' textInputConfig={{
        multiline: true,
        // numberOfLines: 3,
        // autoCorrect: false,

    }}/>
  </View>
  )
}

const styles = StyleSheet.create({
    // your styles here
    formStyle: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    rowInput: {
        flex: 1,
    },
 });
