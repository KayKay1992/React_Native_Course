import React from 'react'
import { View , Text, Pressable, Image, StyleSheet, Platform} from 'react-native'

export default function MealItem({title, imageUrl, duration, complexity, affordability}) {
  return (
    <View style={styles.MealItem}>
      <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> pressed ? styles.buttonPressed : null}>
        <View>
           <View>  
            <Image source={ {uri: imageUrl } } style={styles.image}/>
           <Text style={styles.title}>{title}</Text> 
           </View>
           <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration} min</Text>
             <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text> 
             <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text> 
           </View>
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
  buttonPressed: {
    opacity: 0.5,    
},
})
