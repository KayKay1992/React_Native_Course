import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return(
  <LinearGradient colors={['#4e0329', '#ddb10f']} style={styles.rootScreen}>
    <StartGameScreen/> 
  </LinearGradient>
  ) 
}

const styles = StyleSheet.create({
  // Add your own styles here
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
});


