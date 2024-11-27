import React from 'react'
import { Image, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

export default function MealDetailScreen({route}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
        <Image source={{uri: selectedMeal.imageUrl}}/>
        <Text> {selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
        <Text>ingredients</Text>
        {selectedMeal.ingredients.map((ingredient, index) => (
            <Text key={index}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal.steps.map((step, index) => (
            <Text key={index}>{step}</Text>
        ))}
    </View>
  )
}
