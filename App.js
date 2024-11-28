
import { StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';

//make sure you install the compatible version of react-navigation/native-stack to avoid error

const Stack = createNativeStackNavigator();
export default function App() {
  return(
  <>
       <StatusBar style='light'/>
       <NavigationContainer>
         <Stack.Navigator screenOptions= {{
            headerStyle: { backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f01' },
         }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: 'All Categories',
          }} />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen}  
           />
           <Stack.Screen name="MealDetail" component={MealDetailScreen} 
           //This is an option but is not right if the button is going to have interaction on the same screen, so the best option is going to the meal DetailScreen componenet file and using useLayoutEffect
          //  options={{
          //   headerRight: () => {
          //     return <Button title='Favourite' onPress={}/>;
          //   },
          //  }}
           />
        </Stack.Navigator> 
     </NavigationContainer>
    </>
  ) ;
}

const styles = StyleSheet.create({
  // Add your own styles here
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   

  }
});


