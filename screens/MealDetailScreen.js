import {useContext, useLayoutEffect} from 'react'
import { Image, Text, View, StyleSheet, ScrollView} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import IconButton from '../components/IconButton';
import { FavouriteContext } from '../store/context/favourite-context';

export default function MealDetailScreen({route, navigation}) {
  const favouriteMealContext =  useContext(FavouriteContext)

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const isFavourite = favouriteMealContext.ids.includes(mealId);

    function changeFavouriteStatusHandler(){
       if (isFavourite) {
        favouriteMealContext.removeFavourite(mealId);
       }else{
        favouriteMealContext.addFavourite(mealId);
       }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={isFavourite ? 'heart' : 'heart-outline'} color='white' onPress={changeFavouriteStatusHandler}/>
                )
            }
        });
    }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}> {selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText}/>
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
         <Subtitle>INGREDIENTS</Subtitle>
         <List data={selectedMeal.ingredients}/>
        <Subtitle>STEPS</Subtitle>
        {/* {selectedMeal.steps.map((step, index) => (
            <Text key={index}>{step}</Text>
        ))} */}
        <List data={selectedMeal.steps}/>
        </View>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
        marginBottom: 90,
    },
   listContainer: {
    width: '80%'
   },
})