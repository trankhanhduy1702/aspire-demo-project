import { ViewStyle } from 'react-native'

export interface SwitchProps {
  testID?: string
  value: boolean
  onChange: (value: boolean) => void
  style?: ViewStyle
}
