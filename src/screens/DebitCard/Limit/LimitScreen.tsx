import React, { useCallback, useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Button from '@components/Button'
import CurrencyLogo from '@components/CurrencyLogo'
import Header from '@components/Header'
import Icon from '@components/Icon'
import Loading from '@components/Loading'
import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { GLOBAL_HORIZONTAL_PADDING } from '@constants/dimensions'
import { currencyFormat } from '@helpers/currency.helper'
import { useAppDispatch, useAppSelector } from '@hooks/useReduxHook'
import { NavigationService } from '@services/navigation/navigationService'
import {
  updateActiveSpendingLimit,
  updateSpendingLimit,
} from '@states/debitCard/debitCard.slice'
import { getSpendingLimitList } from '@states/spendingLimit/spendingLimit.action'
import { getSpendingLimitState } from '@states/spendingLimit/spendingLimit.selector'

import ListLimit from './components/ListLimit/ListLimit'

const LimitScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  /**
   * State
   */
  const [selectedLimit, setSelectedLimit] = useState(0)

  /**
   * Selector
   */
  const { isLoading } = useAppSelector(getSpendingLimitState)

  /**
   * Get spending limit list option
   */
  useEffect(() => {
    dispatch(getSpendingLimitList())
  }, [])

  const onSave = useCallback(() => {
    dispatch(updateSpendingLimit(selectedLimit))
    NavigationService.goBack()
  }, [dispatch, selectedLimit])

  const onGoBack = useCallback(() => {
    dispatch(updateActiveSpendingLimit(false))
  }, [dispatch])

  const renderTitle = () => {
    return (
      <View style={styles.titleWrapper}>
        <Icon icomoon name={'limit'} size={16} />

        <Text type={'body3'} style={styles.title}>
          Set a weekly debit card spending limit
        </Text>
      </View>
    )
  }

  const renderLimitField = () => {
    return (
      <View style={styles.limitFieldWrapper}>
        <View style={styles.limitFieldContentWrapper}>
          <CurrencyLogo />

          <Text type={'h3'} style={styles.limitText} numberOfLines={1}>
            {currencyFormat(selectedLimit)}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View testID={'LimitScreen'} style={styles.container}>
      <Header label={'Spending limit'} hasGoBack onGoBack={onGoBack} />

      <View style={styles.wrapContent}>
        {renderTitle()}

        {renderLimitField()}

        <ListLimit onSelectLimit={setSelectedLimit} />

        <View style={[styles.wrapFooter]}>
          <Button
            testID={'LimitScreen_Save_Button'}
            label={'save'}
            onPress={onSave}
            disable={!selectedLimit}
          />
        </View>
      </View>

      <Loading isLoading={isLoading} />
    </View>
  )
}

export default LimitScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_90,
  },
  wrapContent: {
    flex: 1,
    marginTop: '10%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
    backgroundColor: COLORS.WHITE,
  },

  titleWrapper: {
    marginTop: '10%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    marginLeft: 16,
  },

  limitFieldWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_80,
    marginTop: 17,
    paddingBottom: 14,
  },
  limitFieldContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limitText: {
    flex: 1,
    marginLeft: 10,
  },

  wrapFooter: {
    paddingHorizontal: 32,
    paddingBottom: 24,
  },
})
