import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({children}){
   return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color:   Colors.secondary500,
        textAlign: 'center',
        borderWidth:2,
        borderColor:  Colors.secondary500,
        borderRadius: 10,
        padding :12,
      }
});