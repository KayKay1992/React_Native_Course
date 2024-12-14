import { Text, TextInput, View } from "react-native";


export default function Input({label, TextInputConfig}) {
  return (
     <View>
         {/* Input component */}
         <Text>{label}</Text>
         {/* Input field */}
         <TextInput {...TextInputConfig}/>
     </View>
  )
}
