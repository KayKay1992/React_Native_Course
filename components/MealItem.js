import React from 'react'
import { View , Text, Pressable, Image, StyleSheet, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

export default function MealItem({id, title, imageUrl, duration, complexity, affordability}) {

  const navigation = useNavigation()
  
  function selectMealItemHandler(){
    navigation.navigate('MealDetail' , {mealId : id})
  }

  return (
    <View style={styles.MealItem}>
      <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> pressed ? styles.buttonPressed : null} onPress={selectMealItemHandler}>
        <View>
           <View>  
            <Image source={ {uri: imageUrl } } style={styles.image}/>
           <Text style={styles.title}>{title}</Text> 
           </View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
           </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: Platform.OS=== 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8, 
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  buttonPressed: {
    opacity: 0.5,    
},
})
