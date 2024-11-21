
import { View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
       {children}
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
       marginHorizontal:24,
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 34,
        backgroundColor: Colors.primary800,
        borderRadius:10,
        elevation: 4,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
    },
})