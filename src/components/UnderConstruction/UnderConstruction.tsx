import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '@components/Text'
import { GLOBAL_HORIZONTAL_PADDING } from '@constants/dimensions'

import { UnderConstructionProps } from './UnderConstruction.interface'
import { COLORS } from '@constants/colors'

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  name = 'Screen',
}) => {
  return (
    <View style={styles.container}>
      <Text type={'h4'} center>{`${name} \n is under construction`}</Text>
    </View>
  )
}

export default UnderConstruction

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
    backgroundColor: COLORS.WHITE,
  },
})
