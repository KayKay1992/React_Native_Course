import {useLayoutEffect} from 'react'
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealFavouriteList from '../components/MealFavouriteList';
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
   }, [catId, navigation])

   return <MealFavouriteList items={displayedmeals}/>
};
       export default MealOverviewScreen;