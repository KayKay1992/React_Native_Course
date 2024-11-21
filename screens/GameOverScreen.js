import { Image, View, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";


export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title> Game Over !!</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.imageStyle} source={require('../assets/images/success.jpg')}/>
      </View>  
      <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  // Add your styles here
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    marginTop: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 22,
  },
  highlight: {
    color: Colors.secondary500,
    fontWeight: 'bold',
  },

});