import { useState, useEffect } from "react";
import {View, StyleSheet, Alert} from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

// GameScreen.js

function generateRandomBetween(min, max, exclude) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }else {
  return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber); 
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction) {
     // Update minBoundary and maxBoundary based on the user's guess and the number they're trying to guess.
     if(
      (direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)
    ){
       Alert.alert('Dont lie','You Know this is a lie....', [{text: 'sorry', style: 'cancel'},]);
       return;
     }


     if(direction=== 'lower'){
      maxBoundary = currentGuess
     } else {
      minBoundary = currentGuess + 1
     }
     const newRndNumber =  generateRandomBetween(minBoundary, maxBoundary, currentGuess);
     setCurrentGuess(newRndNumber)
  }
  return (
    <View style={styles.GameScreen}>
        <Title>Opponent's Guess </Title>
       {/* Your Guess */}
        <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        {/* + - */}
        <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        </View>
      </Card>
      <View>
        {/* LOG ROUNDS */}
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    GameScreen: {
        flex: 1,
        padding: 20,  
    },
   
})
