import { View , Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";


export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text  style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary700,
        borderWidth: 1,
        padding: 16,
        marginVertical: 8,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
        elevation: 4,
        backgroundColor: Colors.secondary500,
        //for ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    itemText : {
        fontSize: 28,
        fontWeight: 'bold',
       
    }
})