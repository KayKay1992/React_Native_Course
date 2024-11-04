
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>Welcome to React Native!</Text>
        <Text style={styles.dummyText}>This is an example app.</Text>
        <View>
        <Text style={styles.dummyText}>when you press the button nothing happens </Text>
          <Text> because we have not added interactivity</Text>   
        </View>
        
      </View>
      <Text>Hello world</Text>
      <Button title="Click me"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'red',
    padding: 16,
  }
});
