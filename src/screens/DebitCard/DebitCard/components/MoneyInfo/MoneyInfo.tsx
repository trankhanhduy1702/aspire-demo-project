import React from 'react'
import { StyleSheet, View } from 'react-native'

import CurrencyLogo from '@components/CurrencyLogo'
import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { GLOBAL_HORIZONTAL_PADDING } from '@constants/dimensions'
import { currencyFormat } from '@helpers/currency.helper'
import { useAppSelector } from '@hooks/useReduxHook'
import { getDebitCardState } from '@states/debitCard/debitCard.selector'

const MoneyInfo: React.FC = () => {
  /**
   * Selector
   */
  const { debitCardInfo } = useAppSelector(getDebitCardState)

  return (
    <View style={styles.container}>
      <Text type={'body3'} style={styles.title}>
        Available balance
      </Text>

      <View style={styles.contentWrapper}>
        <CurrencyLogo size={'small'} />
        <Text type={'h3'} style={styles.currency}>
          {currencyFormat(debitCardInfo.currentAmount)}
        </Text>
      </View>
    </View>
  )
}

export default React.memo(MoneyInfo)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
    marginTop: 24,
  },
  title: {
    color: COLORS.WHITE,
  },
  contentWrapper: {
    marginTop: 15,
    flexDirection: 'row',
  },
  currency: {
    marginLeft: 10,
    color: COLORS.WHITE,
  },
})
