
import { StyleSheet,Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/screen';



export default function App() {
  return(
     <CategoriesScreen/>
  ) 
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


