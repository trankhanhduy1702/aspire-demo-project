import React, { useCallback } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from '@components/Icon'
import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { BOTTOM_TAB_BAR_HEIGHT } from '@constants/dimensions'
import CommonStyles from '@constants/styles'

const CustomBottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets()

  const getIcon = (name: string) => {
    switch (name) {
      case 'HomeScreen':
        return 'logo'
      case 'DebitCardScreen':
        return 'card'
      case 'PaymentsScreen':
        return 'payments'
      case 'CreditScreen':
        return 'credit'
      case 'ProfileScreen':
        return 'account'
      default:
        return ''
    }
  }

  const getTitle = (name: string) => {
    switch (name) {
      case 'HomeScreen':
        return 'Home'
      case 'DebitCardScreen':
        return 'Debit Card'
      case 'PaymentsScreen':
        return 'Payments'
      case 'CreditScreen':
        return 'Credit'
      case 'ProfileScreen':
        return 'Profile'
      default:
        return ''
    }
  }

  const renderContent = useCallback(() => {
    return state.routes.map((route, index) => {
      const { options } = descriptors[route.key]
      const label = options.tabBarLabel
        ? options.tabBarLabel
        : options.title
        ? options.title
        : route.name

      const isFocused = state.index === index
      const focusedColor = isFocused ? COLORS.PRIMARY : COLORS.GRAY

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name)
        }
      }

      return (
        <TouchableOpacity
          key={`${label.toString()}_${index}`}
          onPress={onPress}
          style={styles.itemWrapper}>
          <Icon icomoon name={getIcon(route.name)} color={focusedColor} />
          <Text type={'small'} style={[styles.text, { color: focusedColor }]}>
            {getTitle(route.name)}
          </Text>
        </TouchableOpacity>
      )
    })
  }, [descriptors, navigation, state.index, state.routes])

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.contentWrapper,
          insets.bottom
            ? { height: BOTTOM_TAB_BAR_HEIGHT + insets.bottom }
            : {},
        ]}>
        {renderContent()}
      </View>
    </View>
  )
}

export default CustomBottomTabBar

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    overflow: 'hidden',
    backgroundColor: COLORS.WHITE,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: BOTTOM_TAB_BAR_HEIGHT,
    paddingTop: 9,
    ...CommonStyles.lightShadow,
    backgroundColor: COLORS.WHITE,
  },
  itemWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 3,
  },
})
