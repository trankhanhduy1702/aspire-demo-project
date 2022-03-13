import React from 'react'
import { Switch as RNSwitch, Platform } from 'react-native'

import { COLORS } from '@constants/colors'

import { SwitchProps } from './Switch.interface'

const Switch: React.FC<SwitchProps> = ({
  testID = '',
  value,
  onChange,
  style,
}) => {
  return (
    <RNSwitch
      testID={testID}
      value={value}
      onValueChange={onChange}
      trackColor={{ false: COLORS.GRAY_90, true: COLORS.PRIMARY }}
      ios_backgroundColor={COLORS.GRAY_90}
      thumbColor={COLORS.WHITE}
      style={[
        Platform.OS === 'ios'
          ? { transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }
          : {},
        style,
      ]}
    />
  )
}

export default Switch
