import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { BUTTON_HEIGHT } from '@constants/dimensions'
import CommonStyles from '@constants/styles'

import { ButtonProps } from './button.interface'

const Button: React.FC<ButtonProps> = ({
  testID = '',
  label = '',
  onPress = () => null,
  type = 'primary',
  style,
  labelStyle,
  disable,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disable}
      style={[
        styles.container,
        styles[`${type}_container_color`],
        disable && styles.disableContainer,
        style,
      ]}>
      <Text type={'body4'} style={[styles[`${type}_text_color`], labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button)

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  disableContainer: {
    ...CommonStyles.lightShadow,
    backgroundColor: COLORS.GRAY_90,
  },

  primary_container_color: {
    backgroundColor: COLORS.PRIMARY,
  },

  primary_text_color: {
    color: COLORS.WHITE,
  },
})
