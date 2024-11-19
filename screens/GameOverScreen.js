import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";


export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title> Game Over !!</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.imageStyle} source={require('../assets/images/success.jpg')}/>
      </View>  
      <Text>Your Phone needed x rounds to guess the number y.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  // Add your styles here
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },


});