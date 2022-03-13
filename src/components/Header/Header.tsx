import React, { useMemo } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from '@components/Icon'
import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import {
  GLOBAL_HORIZONTAL_PADDING,
  HEADER_HEIGHT,
  HEADER_HEIGHT_WITH_LEFT_ICON,
} from '@constants/dimensions'
import { NavigationService } from '@services/navigation/navigationService'

import { HeaderProps } from './Header.interface'

const Header: React.FC<HeaderProps> = ({
  label = '',
  hasGoBack,
  onGoBack = () => null,
}) => {
  const insets = useSafeAreaInsets()

  const headerHeight = useMemo(() => {
    return hasGoBack ? HEADER_HEIGHT_WITH_LEFT_ICON : HEADER_HEIGHT
  }, [hasGoBack])

  const onPressGoBack = () => {
    onGoBack()
    NavigationService.goBack()
  }

  const renderTitle = () => {
    return (
      <View style={styles.wrapTitle}>
        <Text type={'h3'} style={styles.title}>
          {label}
        </Text>
      </View>
    )
  }

  const renderIcon = () => {
    return (
      <View
        style={[styles.wrapIcon, hasGoBack ? { alignItems: 'center' } : {}]}>
        {hasGoBack ? (
          <TouchableOpacity
            testID={'Header_Go_Back_Button'}
            style={styles.leftIconWrapper}
            onPress={onPressGoBack}>
            <Icon name={'chevron-thin-left'} size={18} color={COLORS.WHITE} />
          </TouchableOpacity>
        ) : (
          renderTitle()
        )}

        <View style={styles.rightIconWrapper}>
          <Icon icomoon name={'logo'} color={COLORS.PRIMARY} />
        </View>
      </View>
    )
  }

  return (
    <View
      style={[
        styles.container,
        { height: headerHeight },
        insets.top
          ? { height: headerHeight + insets.top, paddingTop: insets.top }
          : {},
      ]}>
      {renderIcon()}
      {hasGoBack && renderTitle()}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {},
  wrapIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftIconWrapper: {
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
    paddingVertical: 15,
  },
  rightIconWrapper: {
    paddingRight: GLOBAL_HORIZONTAL_PADDING,
    paddingVertical: 15,
  },
  wrapTitle: {
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 4,
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
    color: COLORS.WHITE,
  },
})
