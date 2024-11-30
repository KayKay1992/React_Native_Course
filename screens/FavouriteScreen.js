import { useContext } from 'react'
import { StyleSheet , View, Text} from 'react-native';
import MealFavouriteList from '../components/MealFavouriteList'
import { FavouriteContext } from '../store/context/favourite-context';
import { MEALS } from '../data/dummy-data';


export default function FavouriteScreen() {
  // Fetch or retrieve the favourite meals from the FavouriteContext
 const favouriteMealContext =  useContext(FavouriteContext);

 const favouriteMeals = MEALS.filter((meal) => favouriteMealContext.ids.includes(meal.id));

 if(favouriteMeals.length === 0){
  return (
   <View style={styles.rootContainer}>
    <Text style={styles.text}>No favourite meals found</Text>
   </View>
  )
 }
  return (
   <MealFavouriteList items={favouriteMeals}/>
  )
}


const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
})