import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return(
  <LinearGradient colors={['#4e0329', '#ddb10f']} style={styles.rootScreen}>
    <ImageBackground source={require('./assets/images/jonathan-petersson-W8V3G-Nk8FE-unsplash.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
    <StartGameScreen/> 
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


