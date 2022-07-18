import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AddDiary({ navigation }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submit = async () => {
    const diary = { title, body }
    const all_items = (await AsyncStorage.getItem('diaries')) || '[]'
    const parsed = JSON.parse(all_items)
    const updated_diary = JSON.stringify([...parsed, diary])
    await AsyncStorage.setItem('diaries', updated_diary)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.label}>Title: </Text>
        <TextInput
          style={styles.title_input}
          placeholder='example'
          onChangeText={setTitle}
          value={title}
        />
      </View>
      <View style={[styles.group, { flex: 1, marginTop: 20 }]}>
        <Text style={styles.label}>Body: </Text>
        <TextInput
          style={[styles.title_input, , { height: 250 }]}
          placeholder='example'
          onChangeText={setBody}
          value={body}
          multiline
        />
      </View>
      <CustomButton title='Submit' onPress={submit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title_input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: 'grey',
  },
  label: { fontSize: 20, marginLeft: 20, marginBottom: 10 },
  group: {},
})
