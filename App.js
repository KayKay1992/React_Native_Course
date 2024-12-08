
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/iconButton'
import ExpensesContextProvider from './store/expensesContext';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

function ExpensesTab() {
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      tabBarInactiveTintColor: GlobalStyles.colors.gray400,
      headerRight: () =>(
      <IconButton icon='add' size={24} color='white' onPress={()=> {
        navigation.navigate('ManageExpenses')
      }}/>
    ),
    }}>
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses}
       options={{
        title: "Recent Expenses",
        tabBarLabel: "Recent ",
        tabBarIcon: ({color, size}) => (
        <Ionicons name='hourglass' size={size} color={color}/>
      ),
      }}
       />
      <BottomTab.Screen name="AllExpenses" component={AllExpenses} options={{
        title: "All Expenses",
        tabBarLabel: "All Expenses",
        tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color}/>
      }}
       />
   
    </BottomTab.Navigator>
  )
}

export default function App() {
  return(
      <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
          headerTitleStyle: {fontSize: 24, fontWeight: 'bold'},
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }} >
        <Stack.Screen name="ExpensesTab" component={ExpensesTab} options={{headerShown: false}}/>
          <Stack.Screen name="ManageExpenses" component={ManageExpenses}  options={{
            presentation: 'modal',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
      
  </>
  ) 
}



