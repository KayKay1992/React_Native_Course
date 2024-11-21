import { Text, View, StyleSheet, Dimensions } from "react-native"
import Colors from "../../constants/colors"

export default function NumberContainer({children}) {
  
  return (
    <View style={styles.container}>
       <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.secondary500,
        fontSize: deviceWidth < 380 ? 24 : 48,
        fontWeight: "bold",
    },
})

