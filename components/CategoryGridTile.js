import { Pressable, Text, View, StyleSheet, Platform } from "react-native";


 function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={styles.gridItemContainer}>
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=>[styles.gridButton, pressed ? styles.buttonPressed : null]} onPress={onPress}>
            <View style={[styles.gridItemText, {backgroundColor: color}]}>
                <Text style={styles.title}>
                   {title}
                </Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItemContainer: {
        flex: 1,
        marginTop: 30,
        // borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 16,
        height: 150,
        // backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: Platform.OS=== 'android' ? 'hidden' : 'visible',
       
    },
    gridButton: {
        flex: 1,
        
    },
    gridItemText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
    // 
    },
    buttonPressed: {
        opacity: 0.5,    
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
});