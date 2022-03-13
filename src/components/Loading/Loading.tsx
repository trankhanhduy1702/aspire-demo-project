import React from 'react'
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native'

import { COLORS } from '@constants/colors'

import { LoadingProps } from './Loading.interface'

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Modal visible={isLoading} transparent>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_OPACITY(0.7),
  },
})
