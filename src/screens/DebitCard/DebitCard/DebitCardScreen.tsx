import React, { useEffect } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  RefreshControl,
} from 'react-native'

import Header from '@components/Header'
import { CARD_HEIGHT } from '@constants/card'
import { COLORS } from '@constants/colors'
import { GLOBAL_HORIZONTAL_PADDING } from '@constants/dimensions'
import { useAppDispatch, useAppSelector } from '@hooks/useReduxHook'
import { getDebitCardInfo } from '@states/debitCard/debitCard.action'
import { getDebitCardState } from '@states/debitCard/debitCard.selector'

import Card from './components/Card/Card'
import ListOption from './components/ListOption/ListOption'
import MoneyInfo from './components/MoneyInfo/MoneyInfo'
import SpendingLimit from './components/SpendingLimit/SpendingLimit'

const DebitCardScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  /**
   * Selector
   */
  const { isLoading, debitCardInfo } = useAppSelector(getDebitCardState)

  const onRefresh = () => {
    dispatch(getDebitCardInfo())
  }

  /**
   * Fetch new data first time open app
   */
  useEffect(() => {
    onRefresh()
  }, [])

  return (
    <View testID={'DebitCardScreen'} style={styles.container}>
      <View style={styles.contentBehindWrapper}>
        <Header label={'Debit Card'} />
        <MoneyInfo />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            tintColor={COLORS.WHITE}
            progressViewOffset={20}
          />
        }
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.whiteArea}>
          <Card />
          {debitCardInfo.activeSpendingLimit && <SpendingLimit />}
          <ListOption />
        </View>
      </ScrollView>
    </View>
  )
}

export default DebitCardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contentBehindWrapper: {
    position: 'absolute',
    top: 0,
    bottom: '35%', // for show the white space when scroll up on ios
    left: 0,
    right: 0,
    backgroundColor: COLORS.SECONDARY_90,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: Platform.select({ android: '65%', default: '75%' }),
  },
  whiteArea: {
    flexGrow: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: CARD_HEIGHT * (2 / 3),
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
    paddingBottom: 24, // Add more padding to bottom to make better view when scroll to bottom
    backgroundColor: COLORS.WHITE,
  },
})
