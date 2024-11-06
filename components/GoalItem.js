import { StyleSheet, View, Text } from "react-native"


function GoalItem(props) {
return(
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
         </View>
)
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        backgroundColor: '#5e0acc',
        margin: 10,
        borderRadius: 6,
        
       },
       goalText : {
        color: 'white',
       },
})