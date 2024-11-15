import { Text, StyleSheet } from "react-native";

function Title({children}){
   return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color:   '#ddb52f',
        textAlign: 'center',
        borderWidth:2,
        borderColor:  '#ddb52f',
        borderRadius: 10,
        padding :12,
      }
});