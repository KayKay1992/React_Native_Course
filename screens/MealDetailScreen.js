import React from 'react'
import { Text, View } from 'react-native'

export default function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
  return (
    <View>
        <Text>MealDetailScreen ({mealId})</Text>
    </View>
  )
}
