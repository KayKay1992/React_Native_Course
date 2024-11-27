import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({navigation}){
    function renderCategoriesItem(itemData){
        function pressHandler(){
            navigation.navigate('MealOverview', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title,
                categoryColor: itemData.item.color,
            })
        }
     return <CategoryGridTile title={itemData.item.title}
     color={itemData.item.color} onPress={pressHandler}/>;
    }
    
    return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoriesItem} key={''} numColumns={2}/>
    )
}