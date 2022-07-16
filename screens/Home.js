import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { theme } from '../constants/theme'
import Listitem from '../components/Listitem'

export default function Home(props) {
  return (
    <View style={styles.home}>
      {/* <View style={styles.placehodler_container}>
        <Text style={styles.placeholder}>No Diaryies Yet!</Text>
      </View> */}
      <View style={styles.body}>
        <Listitem
          title='Day to Remember'
          subTitle='20/3/2021'
          style={{ borderTopWidth: 1 }}
        />
        <Listitem title='Lake Day' subTitle='20/3/2021' />
        <Listitem title='My BirthDay' subTitle='20/3/2021' />
      </View>
      <CustomButton
        title='Add a New Day'
        style={{ backgroundColor: theme.primary_color }}
        onPress={() => {
          props.navigation.navigate('Add Diary')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  home: { flex: 1 },
  placehodler_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: { fontSize: 24, color: 'lightgrey' },
  body: { flex: 1 },
})
