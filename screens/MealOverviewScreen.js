import {useLayoutEffect} from 'react'
import { FlatList, View, StyleSheet , Text} from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
// import { useRoute } from '@react-navigation/native'


function MealOverviewScreen({route, navigation}) {
    // const route = useRoute()
//   const catId =  route.params.categoryId
   const catId = route.params.categoryId
   const displayedmeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   useLayoutEffect(()=>{
    const categoryTItle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTItle
    })
   }, [catId, navigation]) // Only re-run effect if catId changes


   function renderMealItem(itemData){
    const item = itemData.item;
    const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability,
        // isGlutenFree: item.isGlutenFree,
        // isVegan: item.isVegan,
        // isVegetarian: item.isVegetarian,
        // isLactoseFree: item.isLactoseFree,
        // isSustainable: item.isSustainable,
        // isDairyFree: item.isDairyFree,
        // isNutFree: item.isNutFree,
        // isSugarFree: item.isSugarFree,
        // isPeanutFree: item.isPeanutFree,
        // isFishFree: item.isFishFree,
        // isShellfishFree: item.isShellfishFree,
    }
    return (
       <MealItem {...mealItemProps}/>
    )
   }

    return (
   <View style={styles.container}>
    <FlatList data={displayedmeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
   </View>
    );
}

export default MealOverviewScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})