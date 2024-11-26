import { Text, View, StyleSheet } from "react-native";


function MealOverviewScreen() {
    return (
   <View style={styles.container}>
    <Text>Meal Overview Screen</Text>
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