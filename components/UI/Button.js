
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

export default function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed} android_ripple={3}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
            <Text  style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 10,
        padding: 10,
        margin: 10,
       
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 2,
        
    }
});
