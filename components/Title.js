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
        color:   'white',
        textAlign: 'center',
        borderWidth:2,
        borderColor:  'white',
        borderRadius: 10,
        padding :12,
      }
});