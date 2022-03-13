import { StyleSheet } from 'react-native'

import { COLORS } from '@constants/colors'

const CommonStyles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.BLACK,
    zIndex: 1,

    // config for ios
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // config for android
    elevation: 7,
  },

  lightShadow: {
    shadowColor: COLORS.BLACK,
    zIndex: 1,

    // config for ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // config for android
    elevation: 3,
  },
})
export default CommonStyles
