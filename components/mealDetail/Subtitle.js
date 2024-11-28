import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    subtitle: {
        fontWeight: 'bold',
        color: '#e2b497',
        fontSize: 18,
        textAlign: 'center',
      
    },
    subtitleContainer: {
        padding: 6,
        marginVertical: 5,
        marginHorizontal: 24,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
})