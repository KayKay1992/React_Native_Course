import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
     screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen/>
  }



  return(
  <LinearGradient colors={[Colors.primary700, Colors.secondary600 ]} style={styles.rootScreen}>
    <ImageBackground source={require('./assets/images/jonathan-petersson-W8V3G-Nk8FE-unsplash.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
     {/* /*Add SafeAreaView to avoid cutting off the top and bottom edges of the screen on iPhone X and XR devices.*/ }
      <SafeAreaView style={styles.rootScreen}>
         { screen}
       </SafeAreaView>
    </ImageBackground>
  </LinearGradient>
  ) 
}

const styles = StyleSheet.create({
  // Add your own styles here
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,

  }
});


