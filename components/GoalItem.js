import { StyleSheet, View, Text, Pressable } from "react-native"


function GoalItem(props) {

return(
   
    <View style={styles.goalItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{color: '#210664'}} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>  
      </Pressable>
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
       pressedItem: {
        opacity: 0.5
       },
})