import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";


export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const {width, height} = useWindowDimensions();
  let imageSize = 300;
  if(width < 480) {
    imageSize = 150;
  }
  if(height < 480) {
    imageSize = 80;
  }

  const imageStyle ={
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginBottom: 16,
  }
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title> Game Over !!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
      <Image style={styles.imageStyle} source={require('../assets/images/success.jpg')}/>
      </View>  
      <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  // Add your styles here
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    alignItems: 'center',
    justifyContent: 'center',
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