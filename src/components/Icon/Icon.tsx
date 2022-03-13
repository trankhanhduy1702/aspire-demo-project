import React from 'react'
import { StyleSheet } from 'react-native'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
// import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import IcomoonConfig from '@assets/selection.json'
import { COLORS } from '@constants/colors'

import { CustomIconProps } from './Icon.interface'

const Icomoon = createIconSetFromIcoMoon(
  IcomoonConfig,
  'icomoon',
  'icomoon.ttf',
)

const Icon: React.FC<CustomIconProps> = ({
  size = 24,
  color = COLORS.BLACK,
  icomoon,
  style,
  ...props
}) => {
  const Wrapper = icomoon ? Icomoon : EntypoIcon
  return (
    <Wrapper
      size={size}
      color={color}
      style={[styles.container, { width: size }, style]}
      {...props}
    />
  )
}

export default Icon

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
  },
})
