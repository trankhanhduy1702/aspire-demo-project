import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '@components/Text'
import { COLORS } from '@constants/colors'

import { CurrencyLogoProps } from './CurrencyLogo.interface'

const CurrencyLogo: React.FC<CurrencyLogoProps> = ({ size = 'normal' }) => {
  const textType = useMemo(() => {
    switch (size) {
      case 'small':
        return 'body1_Bold'
      default:
        return 'body2_Bold'
    }
  }, [size])

  const paddingVertical = useMemo(() => {
    switch (size) {
      case 'small':
        return 3
      default:
        return 6
    }
  }, [size])

  return (
    <View style={[styles.container, { paddingVertical }]}>
      <Text type={textType} style={styles.text}>
        S$
      </Text>
    </View>
  )
}

export default CurrencyLogo

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: COLORS.PRIMARY,
  },
  text: {
    lineHeight: 13,
    color: COLORS.WHITE,
  },
})
