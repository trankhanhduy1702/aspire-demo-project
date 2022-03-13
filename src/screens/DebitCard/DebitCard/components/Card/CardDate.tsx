import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '@components/Text'
import { COLORS } from '@constants/colors'

import { CardDateProps } from './Card.interface'

const CardDate: React.FC<CardDateProps> = ({
  validThur = '',
  cvv = '',
  hideNumber,
}) => {
  const renderCVV = () => {
    return (
      <View style={styles.cvvWrapper}>
        <Text type={'body2_Demi'} style={styles.text}>
          CVV:
        </Text>

        <Text
          type={hideNumber ? 'h4' : 'body2_Demi'}
          style={hideNumber ? styles.hideCVVText : styles.text}>
          {hideNumber ? '***' : cvv}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text type={'body2_Demi'} style={styles.text}>
        {`Thru: ${validThur}`}
      </Text>

      {renderCVV()}
    </View>
  )
}

export default React.memo(CardDate)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
  },
  text: {
    letterSpacing: 1.56,
    color: COLORS.WHITE,
  },
  cvvWrapper: {
    flexDirection: 'row',
    marginLeft: 32,
  },
  hideCVVText: {
    letterSpacing: 2.56,
    color: COLORS.WHITE,
  },
})
