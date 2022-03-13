import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '@components/Text'
import { COLORS } from '@constants/colors'

import { CardNumberFieldProps } from './Card.interface'

const CardNumberField: React.FC<CardNumberFieldProps> = ({
  cardNumber = '',
  hideNumber,
}) => {
  const renderVisibleContent = () => {
    const content_1 = cardNumber.slice(0, 4)
    const content_2 = cardNumber.slice(4, 8)
    const content_3 = cardNumber.slice(8, 12)
    const content_4 = cardNumber.slice(12, cardNumber.length)

    return (
      <View
        style={styles.contentWrapper}
        testID={'DebitCardScreen_Card_CardNumber_Visible_Container'}>
        <Text type={'body3_Demi'} style={styles.text}>
          {content_1}
        </Text>
        <Text type={'body3_Demi'} style={styles.text}>
          {content_2}
        </Text>
        <Text type={'body3_Demi'} style={styles.text}>
          {content_3}
        </Text>
        <Text type={'body3_Demi'} style={styles.text}>
          {content_4}
        </Text>
      </View>
    )
  }

  const renderHideContent = () => {
    const last4Chars = cardNumber.slice(12, cardNumber.length)

    return (
      <View
        style={styles.contentWrapper}
        testID={'DebitCardScreen_Card_CardNumber_Invisible_Container'}>
        <View style={styles.wrapDot}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.wrapDot}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.wrapDot}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text type={'body3_Demi'} style={styles.text}>
          {last4Chars}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {hideNumber ? renderHideContent() : renderVisibleContent()}
    </View>
  )
}

export default React.memo(CardNumberField)

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 20,
    letterSpacing: 3.46,
    color: COLORS.WHITE,
  },

  wrapDot: {
    flexDirection: 'row',
    marginRight: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 6,
    backgroundColor: COLORS.WHITE,
  },
})
