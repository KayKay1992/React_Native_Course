
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>This is an example app.</Text>
        <View>
        <Text>when you press the button nothing happens </Text>
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
});
