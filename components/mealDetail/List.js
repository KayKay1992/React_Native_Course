import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function List({data}) {
  return (
    data.map((dataPoint) => (
      <View style={styles.listItem} key={dataPoint}>
         <Text style={styles.listText}>{dataPoint}</Text>
      </View> 
    ))
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    }, 
    listText: {
        color: '#351401',
        textAlign: 'center',
    },
})

