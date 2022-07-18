import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Home from './screens/Home.js'
import Constant from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from './constants/theme'
import AddDiary from './screens/AddDiary.js'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Diary'
              component={Home}
              options={{
                title: 'Diary',
                headerStyle: {
                  backgroundColor: theme.primary_color,
                },
              }}
            />
            <Stack.Screen
              screenOptions={{ presentation: 'modal' }}
              name='AddDiary'
              component={AddDiary}
              options={{
                title: 'Add a Diary',
                headerStyle: {
                  backgroundColor: theme.primary_color,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E1D5E7',
    marginTop: Constant.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
