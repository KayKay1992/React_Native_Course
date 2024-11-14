import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
     screen = <GameScreen/>
  }

  return(
  <LinearGradient colors={['#4e0329', '#ddb10f']} style={styles.rootScreen}>
    <ImageBackground source={require('./assets/images/jonathan-petersson-W8V3G-Nk8FE-unsplash.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      { screen}
    </ImageBackground>
  </LinearGradient>
  ) 
}

const styles = StyleSheet.create({
  // Add your own styles here
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,

  }
});


