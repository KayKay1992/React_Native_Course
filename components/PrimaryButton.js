import { View, Text, Pressable, StyleSheet } from "react-native";


function PrimaryButton({children}){
    function pressHandler(){
        console.log("Button pressed");
    }
    return (
       
            <View style={styles.buttonOuterContainer}>
                 <Pressable onPress={pressHandler} android_ripple={{color: '#640233'}} style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] :styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
    
    
)}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer:{
        backgroundColor: "#063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elavation:2,
    },
    buttonText: {
       color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.75,
    }
})