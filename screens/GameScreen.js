import {View,  Text, StyleSheet} from "react-native";
function GameScreen() {
  return (
    <View style={styles.GameScreen}>
    <Text>Opponent's Guess</Text>
       {/* Your Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* +
        - */}
      </View>
      <View>
        {/* LOG ROUNDS */}
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    GameScreen: {
        flex: 1,
        padding: 20,
    },
})
