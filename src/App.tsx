import React from 'react'
import { StyleSheet, Platform } from 'react-native'

import RootNavigation from 'navigation/RootNavigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { COLORS } from '@constants/colors'
import { store } from '@states/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          testID={'RootApplication'}
          style={styles.container}
          edges={Platform.select({
            android: ['bottom', 'top', 'left', 'right'],
            default: ['left', 'right'],
          })}>
          <RootNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
})
