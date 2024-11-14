
import { StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return(
  <View style={styles.rootScreen}>
    <StartGameScreen/> 
  </View>
  ) 
}

const styles = StyleSheet.create({
  // Add your own styles here
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
});


