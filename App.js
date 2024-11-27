
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
          //static display of title
          // options={{
          //   title: 'Meal Overview',
          // }} 

          //dynamic display of title option 1
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   }
          // }}
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


