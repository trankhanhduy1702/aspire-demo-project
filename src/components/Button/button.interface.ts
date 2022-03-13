import { TextStyle, ViewStyle } from 'react-native'

export interface ButtonProps {
  testID?: string
  style?: ViewStyle
  labelStyle?: TextStyle
  label?: string
  type?: 'primary'
  onPress?: () => void
  disable?: boolean
}
