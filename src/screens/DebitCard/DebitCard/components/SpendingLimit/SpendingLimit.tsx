import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { Bar } from 'react-native-progress'

import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { useAppSelector } from '@hooks/useReduxHook'
import { getDebitCardState } from '@states/debitCard/debitCard.selector'

const SpendingLimit: React.FC = () => {
  /**
   * Selector
   */
  const { debitCardInfo } = useAppSelector(getDebitCardState)

  const calculateProgress = useMemo(() => {
    if (!debitCardInfo.activeSpendingLimit || !debitCardInfo.spendingLimit)
      return 0

    return debitCardInfo.alreadySpend / debitCardInfo.spendingLimit
  }, [
    debitCardInfo.activeSpendingLimit,
    debitCardInfo.alreadySpend,
    debitCardInfo.spendingLimit,
  ])

  return (
    <View
      testID={'DebitCardScreen_SpendingLimit_Container'}
      style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text type={'body2_Medium'}>Debit card spending limit</Text>

        <View style={styles.amountWrapper}>
          <Text
            type={'body2_Demi'}
            numberOfLines={1}
            style={styles.currentMoney}>
            {`$${debitCardInfo.alreadySpend}`}
            <Text
              type={'body2_Medium'}
              numberOfLines={1}
              style={styles.limitMoney}>
              {` | $${debitCardInfo.spendingLimit}`}
            </Text>
          </Text>
        </View>
      </View>

      <Bar
        width={null}
        height={15}
        borderRadius={16}
        progress={calculateProgress}
        borderWidth={0}
        color={COLORS.PRIMARY}
        unfilledColor={COLORS.PRIMARY_OPACITY(0.1)}
        style={styles.bar}
      />
    </View>
  )
}

export default React.memo(SpendingLimit)

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountWrapper: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'flex-end',
  },
  currentMoney: {
    color: COLORS.PRIMARY,
  },
  limitMoney: {
    flex: 1,
    color: COLORS.GRAY_OPACITY(0.2),
  },
  bar: {
    marginTop: 6,
  },
})
