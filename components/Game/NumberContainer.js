import { Text, View, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
       <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: 24,
        margin: 24,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.secondary500,
        fontSize: 48,
        fontWeight: "bold",
    },
})

