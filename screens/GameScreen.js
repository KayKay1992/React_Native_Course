import { useState, useEffect } from "react";
import {View, StyleSheet, Alert,useWindowDimensions, FlatList} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from "../components/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/Game/GuessLogItem";


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
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() =>{
    // Reset the minBoundary and maxBoundary
   minBoundary= 1; 
    maxBoundary = 100;
  }, [])

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
     setGuessRounds(prevGuessRounds => [newRndNumber,    ...prevGuessRounds ])
  }

  const guessRoundListLength = guessRounds.length;

  let content = (<>
    {/* Your Guess */}
   
      <Card>
        <View style={styles.buttonsContainer}>
       
        </View>
      </Card>
  </>
  );

  if(windowWidth > 500) {
    content =  (
      <>
       <View style={styles.buttonContainerWide}>
       <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="add" size={24} color="white" /></PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="remove" size={24} color="white" /></PrimaryButton>
        </View>
      
      </View>
      </>
    ) 
  }
  return (
    <View style={styles.GameScreen}>
        <Title>Opponent's Guess </Title>
        {content}
      <View style={styles.listContainer}>
        {/* LOG ROUNDS */}
          {/* {guessRounds.map(guessRound =><Text key={guessRound}>{guessRound}</Text>)} */}
          <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}/>} keyExtractor={(item) =>item}/>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    GameScreen: {
        flex: 1,
        padding: 24,  
        alignItems: 'center',
    },
    InstructionText: {
      marginBottom:20,
    },
    buttonsContainer: {
      flexDirection: 'row',
  },
  buttonContainerWide: {
    flexDirection: 'row',
   alignItems: 'center'
  },
  buttonContainer: {
      // marginHorizontal: 8,
      // marginVertical: 16,
      flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
    
  },

})
