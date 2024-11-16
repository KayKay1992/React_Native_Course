import { useState } from "react";
import {View,  Text, StyleSheet} from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/Game/NumberContainer";

// GameScreen.js

function generateRandomBetween(min, max, exclude) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }else {
  return rndNum;
  }
}
function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber); 
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  return (
    <View style={styles.GameScreen}>
        <Title>Opponent's Guess </Title>
       {/* Your Guess */}
        <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or Lower?</Text>
        {/* +
        - */}
      </View>
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
