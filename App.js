
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello, React Native!</Text>
    </View>
  ) ;
}

const styles = StyleSheet.create({
  // Add your own styles here
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   

  }
});


