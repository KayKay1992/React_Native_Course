import { Text, View, StyleSheet } from "react-native";
// import { useRoute } from '@react-navigation/native'


function MealOverviewScreen({route}) {
    // const route = useRoute()
//   const catId =  route.params.categoryId
   const catId = route.params.categoryId
    return (
   <View style={styles.container}>
    <Text>Meal Overview Screen - {catId}</Text>
   </View>
    );
}

export default MealOverviewScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})