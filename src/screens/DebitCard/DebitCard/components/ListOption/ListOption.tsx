import React, { useMemo, useCallback, useState } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import Switch from '@components/Switch'
import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { IMAGES } from '@constants/images'
import { currencyFormat } from '@helpers/currency.helper'
import { useAppDispatch, useAppSelector } from '@hooks/useReduxHook'
import { NavigationService } from '@services/navigation/navigationService'
import { getDebitCardState } from '@states/debitCard/debitCard.selector'
import { updateActiveSpendingLimit } from '@states/debitCard/debitCard.slice'

import { OptionDataType } from './ListOption.interface'

const ListOption: React.FC = () => {
  const dispatch = useAppDispatch()

  /**
   * Selector
   */
  const { debitCardInfo } = useAppSelector(getDebitCardState)

  /**
   * State
   */
  const [isFreeze, setIsFreeze] = useState(false)

  const onChangeLimit = useCallback(
    (value: boolean) => {
      dispatch(updateActiveSpendingLimit(value))

      if (value) NavigationService.navigate('LimitScreen')
    },
    [dispatch],
  )

  const OPTION_DATA = useMemo((): OptionDataType[] => {
    return [
      {
        testId: 'TopUp',
        title: 'Top-up account',
        descriptors: 'Deposit money to your account to use with card',
        image: IMAGES.TOP_UP,
        onPress: () => null,
        hasSwitch: false,
        onSwitch: () => null,
      },
      {
        testId: 'SpendingLimit',
        title: 'Weekly spending limit',
        descriptors: debitCardInfo.activeSpendingLimit
          ? `Your weekly spending limit is S$ ${currencyFormat(
              debitCardInfo.spendingLimit,
            )}`
          : 'You haven’t set any spending limit on card',
        image: IMAGES.LIMIT_CARD,
        onPress: () => null,
        hasSwitch: true,
        switchValue: debitCardInfo.activeSpendingLimit,
        onSwitch: onChangeLimit,
      },
      {
        testId: 'FreezeCard',
        title: 'Freeze card',
        descriptors: 'Your debit card is currently active',
        image: IMAGES.FREEZE_CARD,
        onPress: () => null,
        hasSwitch: true,
        switchValue: isFreeze,
        onSwitch: setIsFreeze,
      },
      {
        testId: 'CreateNewCard',
        title: 'Get a new card',
        descriptors: 'This deactivates your current debit card',
        image: IMAGES.ADD_CARD,
        onPress: () => null,
        hasSwitch: false,
        onSwitch: () => null,
      },
      {
        testId: 'DeactiveCard',
        title: 'Deactivated cards',
        descriptors: 'Your previously deactivated cards',
        image: IMAGES.DEACTIVE_CARD,
        onPress: () => null,
        hasSwitch: false,
        onSwitch: () => null,
      },
    ]
  }, [
    debitCardInfo.activeSpendingLimit,
    debitCardInfo.spendingLimit,
    isFreeze,
    onChangeLimit,
  ])

  const renderOption = useCallback(() => {
    return OPTION_DATA.map(
      (
        {
          testId,
          title,
          descriptors,
          image,
          onPress = () => null,
          hasSwitch,
          switchValue = false,
          onSwitch = () => null,
        }: OptionDataType,
        index,
      ) => {
        return (
          <TouchableOpacity
            testID={`DebitCardScreen_ListOption_${testId}`}
            key={`${title}_${index}`}
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.itemWrapper}>
            <Image source={image} resizeMode={'contain'} />

            <View style={styles.contentWrapper}>
              <Text type={'body3'}>{title}</Text>
              <Text style={styles.descriptionText}>{descriptors}</Text>
            </View>

            {hasSwitch && (
              <Switch
                testID={`DebitCardScreen_ListOption_${testId}_Switch_Button`}
                value={switchValue}
                onChange={onSwitch}
              />
            )}
          </TouchableOpacity>
        )
      },
    )
  }, [OPTION_DATA])

  return <View>{renderOption()}</View>
}

export default React.memo(ListOption)

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 32,
  },
  contentWrapper: {
    flex: 1,
    marginHorizontal: 12,
  },
  descriptionText: {
    color: COLORS.BLACK_OPACITY(0.4),
    marginTop: 4,
  },
})
