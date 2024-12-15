import { StyleSheet, Text, View,  } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import getFormattedDate from "../../util/date";
import { GlobalStyles } from "../../constants/styles";


export default function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputs, setInputs] = useState({
        amount: {value : defaultValues ? defaultValues.amount.toString() : '', isValid: true},

        date:
         { value : defaultValues ? getFormattedDate(defaultValues.date) : '', isValid: true },

        title:  {value : defaultValues ? defaultValues.title : '', isValid: true}
    })

    function inputChangeHandler(inputIdentifier, enteredValue){
        setInputs((curInputs)=> {
            return {
               ...curInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            }
        });
    }

    function submitHandler(){
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            title: inputs.title.value,
        };
        // Adding Validations to the expense form

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const titleIsValid = expenseData.title.trim().length > 0

        if(!amountIsValid || !dateIsValid || !titleIsValid){
            setInputs((curInputs) => {
                return {
                    amount: {value: curInputs.amount.value, isValid: amountIsValid},
                    date: {value: curInputs.date.value, isValid: dateIsValid},
                    title: {value: curInputs.title.value, isValid: titleIsValid},
                }
            }
        
    )
        //   Alert.alert('Please enter valid values for all fields.');
        //     return;
        // }
        return;
        }
        
        onSubmit(expenseData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid
 

  return (
  <View style={styles.formStyle}>
    <Text style={styles.title}>Your Expense</Text>
    <View style={styles.inputsRow}>
    <Input style={styles.rowInput} label='Amount' 
    invalid={!inputs.amount.isValid}
    textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: inputChangeHandler.bind(this, 'amount'),
        value: inputs.amount.value,
    }} />
    <Input style={styles.rowInput} label='Date'
    invalid={!inputs.date.isValid}
     textInputConfig={{
        placeholder: 'yyyy-MM-dd',
        maxLength: 10,
        onChangeText: inputChangeHandler.bind(this, 'date'),
        value: inputs.date.value,
    }}/>
    </View>
    <Input  label='Title' 
      invalid={!inputs.title.isValid}
    textInputConfig={{
        multiline: true,
        onChangeText: inputChangeHandler.bind(this, 'title'),
        value: inputs.title.value,
        // numberOfLines: 3,
        // autoCorrect: false,

    }}/>
    {formIsInvalid && (<Text style={styles.errorText}>Invalid inputs Values please check your eneterd data</Text>)}
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
      errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
      }
 });
