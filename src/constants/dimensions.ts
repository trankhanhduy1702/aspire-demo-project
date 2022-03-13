import { Dimensions, StatusBar } from 'react-native'

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const DEVICE_HEIGHT = HEIGHT + Number(StatusBar.currentHeight)
export const STATUS_BAR_HEIGHT = Number(StatusBar.currentHeight)

export const BOTTOM_TAB_BAR_HEIGHT = 56
export const HEADER_HEIGHT = 56
export const HEADER_HEIGHT_WITH_LEFT_ICON = 89
export const BUTTON_HEIGHT = 56

export const GLOBAL_HORIZONTAL_PADDING = 24
