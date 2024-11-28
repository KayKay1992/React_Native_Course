import React from 'react'
import { Text, View, StyleSheet} from 'react-native'


export default function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.details, style]}>
    <Text style={[styles.detailsItem, textStyle]}>{duration} min</Text>
     <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text> 
     <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text> 
   </View>
  )
}


const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom: 10,
        padding: 10,
      },
      detailsItem: {
        marginHorizontal: 10,
        fontSize: 16,
        
      },
});