import { StyleSheet, View, Text, Pressable } from "react-native"


function GoalItem(props) {
return(
    <Pressable onPress={props.onDeleteItem}>
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
         </View>
   </Pressable>
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