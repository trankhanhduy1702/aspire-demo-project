import React, { useCallback, useMemo } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'

import Text from '@components/Text'
import { COLORS } from '@constants/colors'
import { currencyFormat } from '@helpers/currency.helper'
import { useAppSelector } from '@hooks/useReduxHook'
import { getSpendingLimitState } from '@states/spendingLimit/spendingLimit.selector'

import { ListLimitProps } from './ListLimit.interface'

const ListLimit: React.FC<ListLimitProps> = ({
  onSelectLimit = () => null,
}) => {
  /**
   * Selector
   */
  const { spendingLimitList } = useAppSelector(getSpendingLimitState)

  const convertData = useMemo(() => {
    if (spendingLimitList.length % 3 === 1) {
      return [...spendingLimitList, -1, -1]
    }

    if (spendingLimitList.length % 3 === 2) {
      return [...spendingLimitList, -1]
    }

    return spendingLimitList
  }, [spendingLimitList])

  const renderItem = useCallback(
    ({ item, index }: { item: number; index: number }) => {
      const marginStyle = (index + 1) % 3 !== 0 ? styles.itemMargin : {}

      if (item === -1) {
        return (
          <View
            style={[styles.itemWrapper, styles.emptyItemWrapper, marginStyle]}
          />
        )
      }

      return (
        <TouchableOpacity
          testID={`SpendingLimitScreen_ListLimit_Item_${index}_Button`}
          style={[styles.itemWrapper, marginStyle]}
          onPress={() => onSelectLimit(item)}>
          <Text
            type={'body1_Demi'}
            style={styles.itemText}
            numberOfLines={1}>{`S$ ${currencyFormat(item)}`}</Text>
        </TouchableOpacity>
      )
    },
    [],
  )

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />
  }

  const keyExtractor = useCallback((item: number, index: number) => {
    return `${item.toString()}_${index}`
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Here weekly means the last 7 days - not the calendar week
      </Text>

      <FlatList
        data={convertData}
        extraData={convertData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={styles.flatListContainer}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default React.memo(ListLimit)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  title: {
    color: COLORS.GRAY_OPACITY(0.4),
  },

  flatListContainer: {
    flexGrow: 1,
    paddingTop: 32,
  },
  itemSeparator: {
    height: 10,
  },
  itemWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    width: '30%',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: COLORS.PRIMARY_OPACITY(0.07),
  },
  emptyItemWrapper: {
    backgroundColor: COLORS.TRANSPARENT,
  },
  itemMargin: {
    marginRight: 12,
  },
  itemText: {
    color: COLORS.PRIMARY,
  },
})
