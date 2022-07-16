import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'

export default function CustomButton({ title, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderTopWidth: 0.3,
    borderColor: theme.primary_color_dark,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
})
