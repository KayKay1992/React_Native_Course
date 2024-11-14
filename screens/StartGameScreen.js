import { useState } from "react";
import { TextInput, View , StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };
    
    function confirmInputHandler() {
        setEnteredNumber();
    }
    return(
        <View style={styles.inputContainer}> 
            <TextInput style={styles.TextInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
            <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
            </View>
            </View>
           
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
       marginHorizontal:24,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c',
        borderRadius:10,
        elevation: 4,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
    },
    TextInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 8,
        color: '#ddb52f',
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