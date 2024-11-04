
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your Course Goal'/>
        <Button title='Add Goal' />
      </View>
      <View>
      
        {/* Display goals here */}
        <Text>Your Goals:</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  padding: 50,
 },
});
