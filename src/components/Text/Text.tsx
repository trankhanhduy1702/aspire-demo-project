import React, { memo } from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

import { COLORS } from '@constants/colors'
import { FONTS } from '@constants/fonts'

import { TextProps } from './Text.interface'

const Text: React.FC<TextProps> = ({
  type = 'body2',
  style = {},
  bold,
  uppercase,
  children,
  center,
  ...rest
}) => {
  return (
    <RNText
      allowFontScaling={false}
      style={[
        styles[type],
        styles.textColor,
        bold && styles.bold,
        uppercase && styles.uppercase,
        center && styles.center,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  )
}
export default memo<TextProps>(Text)

export const styles = StyleSheet.create({
  textColor: {
    color: COLORS.SECONDARY,
  },
  h1: {
    fontSize: FONTS.SIZE.h1,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  h2: {
    fontSize: FONTS.SIZE.h2,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  h3: {
    fontSize: FONTS.SIZE.h3,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  h4: {
    fontSize: FONTS.SIZE.h4,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  body4: {
    fontSize: FONTS.SIZE.body4,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_DEMI,
  },
  body3: {
    fontSize: FONTS.SIZE.body3,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_MEDIUM,
  },
  body3_Demi: {
    fontSize: FONTS.SIZE.body3,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_DEMI,
  },
  body2: {
    fontSize: FONTS.SIZE.body2,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_REGULAR,
  },
  body2_Bold: {
    fontSize: FONTS.SIZE.body2,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  body2_Demi: {
    fontSize: FONTS.SIZE.body2,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_DEMI,
  },
  body2_Medium: {
    fontSize: FONTS.SIZE.body2,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_MEDIUM,
  },
  body1: {
    fontSize: FONTS.SIZE.body1,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_REGULAR,
  },
  body1_Bold: {
    fontSize: FONTS.SIZE.body1,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  body1_Demi: {
    fontSize: FONTS.SIZE.body1,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_DEMI,
  },
  small: {
    fontSize: FONTS.SIZE.small,
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_MEDIUM,
  },
  bold: {
    fontFamily: FONTS.FAMILY.AVENIR_NEXT_BOLD,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  center: {
    textAlign: 'center',
  },
})
