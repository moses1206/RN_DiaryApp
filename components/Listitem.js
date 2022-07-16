import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function Listitem({ title, subTitle, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <MaterialIcons name='arrow-forward-ios' size={24} color='black' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  subTitle: { color: 'grey', fontStyle: 'italic', marginTop: 5 },
})
