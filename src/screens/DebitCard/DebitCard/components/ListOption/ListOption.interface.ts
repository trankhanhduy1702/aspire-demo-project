import { ImageSourcePropType } from 'react-native'

export interface OptionDataType {
  testId: string
  title: string
  descriptors: string
  image: ImageSourcePropType
  onPress: () => void

  // Switch data
  hasSwitch?: boolean
  switchValue?: boolean
  onSwitch?: (value: boolean) => void
}
