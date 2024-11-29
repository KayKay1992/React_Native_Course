
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import MealDetailScreen from './screens/MealDetailScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import FavouriteScreen from './screens/FavouriteScreen';

//make sure you install the compatible version of react-navigation/native-stack to avoid error

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator(){
   // Here you can create your own custom drawer navigator
 
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneStyle: { backgroundColor: '#3f2f01' },
      drawerContentStyle: { backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: 'orange',
      drawerActiveBackgroundColor: '#3f2f01',
    }}
      >
      <Drawer.Screen name='Categeries' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="list-circle-sharp" size={size} color={color} />
        )
      }}/>
      <Drawer.Screen name='Favourite' component={FavouriteScreen} options={{
         drawerIcon: ({ size, color }) => (
          <Ionicons name="heart" size={size} color={color} />
        )
      }}/>
    </Drawer.Navigator>
  );

}
export default function App() {
  return(
  <>
       <StatusBar style='light'/>
       <NavigationContainer>
         <Stack.Navigator screenOptions= {{
            headerStyle: { backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f01' },
            headerStyle: { backgroundColor: '#351401'},
         }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen}  
           />
           <Stack.Screen name="MealDetail" component={MealDetailScreen} 
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


