
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal'/>
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
 inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
 },
 textInput: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  padding: 10,
  borderRadius: 5,
  width: '80%',
  marginRight: 10,
 }
});
