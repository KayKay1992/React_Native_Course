import { useState } from "react";
import { TextInput, View , StyleSheet, Alert, useWindowDimensions} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };
     
  function resetInputHandler() {
       setEnteredNumber('');
   }
    
    function confirmInputHandler() {
       const chosenNumber = parseInt(enteredNumber);

       if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
           Alert.alert('Invalid number', 'Please enter a number between 1 and 99.',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
           );
            return;
       }
       onPickNumber(chosenNumber);
    }

    const marginTopDistance = height  < 380 ? 30 : 100;


    return(
        <View style={[styles.mainContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
        <Card> 
            <InstructionText>Enter a Number</InstructionText>
            <TextInput style={styles.TextInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
            <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            </View>  
        </Card>
        </View>
    )
}

export default StartGameScreen;



const styles = StyleSheet.create({
    mainContainer:{
       flex: 1,
       alignItems: 'center',

    },
    TextInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        marginVertical: 8,
        color: Colors.secondary500,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginHorizontal: 8,
        marginVertical: 16,
        flex: 1,
    }
})