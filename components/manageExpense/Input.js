import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";


export default function Input({label, style, textInputConfig}) {
    const inputStyle = [styles.input]
    if ( textInputConfig && textInputConfig.multiline){
        inputStyle.push(styles.inputMultiline)
    }
  return (
     <View style={[styles.inputContainer, style]}>
         {/* Input component */}
         <Text style={styles.label}>{label}</Text>
         {/* Input field */}
         <TextInput style={inputStyle} {...textInputConfig}/>
     </View>
  )
}

const styles = StyleSheet.create({
    // styling for the input field
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
         fontSize: 12,
         fontWeight: 'bold',
         marginBottom: 4,
         color: GlobalStyles.colors.primary100,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        fontSize: 16,
        color: GlobalStyles.colors.primary700,
    },
    inputMultiline: {
       minHeight: 100, 
       textAlignVertical: 'top'
    }
})
