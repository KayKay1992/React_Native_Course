import {  StyleSheet, Text, View,  } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";


export default function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputValue, setInputValue] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date:  defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
        title:  defaultValues ? defaultValues.title : ''
    })

    function inputChangeHandler(inputIdentifier, enteredValue){
        setInputValue((curInputValues)=> {
            return {
               ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    function submitHandler(){
        const expenseData = {
            amount: +inputValue.amount,
            date: new Date(inputValue.date),
            title: inputValue.title,
        };
        onSubmit(expenseData);
    }
 

  return (
  <View style={styles.formStyle

  }>
    <Text style={styles.title}>Your Expense</Text>
    <View style={styles.inputsRow}>
    <Input style={styles.rowInput} label='Amount' textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: inputChangeHandler.bind(this, 'amount'),
        value: inputValue.amount,
        
  
    }} />
    <Input style={styles.rowInput} label='Date' textInputConfig={{
        placeholder: 'yyyy-MM-dd',
        maxLength: 10,
        onChangeText: inputChangeHandler.bind(this, 'date'),
        value: inputValue.date,
    }}/>
    </View>
    <Input  label='Title' textInputConfig={{
        multiline: true,
        onChangeText: inputChangeHandler.bind(this, 'title'),
        value: inputValue.title,
        // numberOfLines: 3,
        // autoCorrect: false,

    }}/>
    <View style={styles.buttons}>
            <Button mode='flat' onPress={onCancel} style={styles.buttton}>Cancel</Button>
            <Button onPress={submitHandler} style={styles.buttton}>{submitButtonLabel}</Button>
          </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
      },
      buttton: {
        minWidth: 120,
        paddingHorizontal: 8
      },
 });
