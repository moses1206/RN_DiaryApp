import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from '../components/CustomButton'
import { theme } from '../constants/theme'
import Listitem from '../components/Listitem'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const [diaries, setDiaries] = useState([])

  const onRefresh = async () => {
    setRefreshing(true)
    const diaries = await AsyncStorage.getItem('diaries')
    setDiaries({ diaries: JSON.parse(diaries) })
    setRefreshing(false)
  }

  console.log(diaries)

  return (
    <View style={styles.home}>
      <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {diaries.length
          ? diaries.map((diary) => {
              return (
                <Listitem
                  title={diary.title}
                  subTitle='20/3/2021'
                  style={{ borderTopWidth: 1 }}
                />
              )
            })
          : null}
      </ScrollView>
      <CustomButton
        title='Add a Diary'
        style={{ backgroundColor: theme.primary_color }}
        onPress={() => navigation.navigate('AddDiary')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  home: { flex: 1 },
  placehodler_container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: { fontSize: 24, color: 'lightgrey' },
  body: { flex: 1 },
})
