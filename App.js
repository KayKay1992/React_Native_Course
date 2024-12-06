
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

function ExpensesTab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
   
    </BottomTab.Navigator>
  )
}

export default function App() {
  return(
      <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="ExpensesTab" component={ExpensesTab} />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
      
  </>
  ) ;
}



