import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import moment from 'moment'

import Text from '@components/Text/Text'
import { CARD_HEIGHT, CARD_WIDTH } from '@constants/card'
import { COLORS } from '@constants/colors'
import { IMAGES } from '@constants/images'
import { useAppSelector } from '@hooks/useReduxHook'
import { getDebitCardState } from '@states/debitCard/debitCard.selector'

import CardDate from './CardDate'
import CardNumberField from './CardNumberField'

const Card: React.FC = () => {
  /**
   * State
   */
  const [hideCard, setHideCard] = useState(false)

  /**
   * Selector
   */
  const { debitCardInfo } = useAppSelector(getDebitCardState)

  const onPressHideCard = () => {
    setHideCard((prevState) => !prevState)
  }

  const renderButtonHideCardNumber = () => {
    const buttonText = hideCard ? 'Show card number' : 'Hide card number'

    return (
      <TouchableOpacity
        testID={'DebitCardScreen_Card_HideCardNumber_Button'}
        style={styles.hideCardNumber}
        onPress={onPressHideCard}
        activeOpacity={0.8}>
        <Image
          source={hideCard ? IMAGES.OPEN_EYE : IMAGES.CLOSE_EYE}
          resizeMode={'contain'}
          style={styles.iconHideCard}
        />
        <Text type={'body1_Demi'} style={styles.hideCardNumberText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderCard = useCallback(() => {
    return (
      <View style={styles.card}>
        <View style={styles.wrapLogo}>
          <Image source={IMAGES.LOGO_WITH_NAME} resizeMode={'contain'} />
        </View>

        <View style={styles.wrapCardInfo}>
          <Text type={'h4'} style={styles.cardHolderName} numberOfLines={1}>
            {`${debitCardInfo.cardInfo.firstName} ${debitCardInfo.cardInfo.lastName}`}
          </Text>

          <CardNumberField
            cardNumber={debitCardInfo.cardInfo.cardNumber}
            hideNumber={hideCard}
          />

          <CardDate
            validThur={moment(debitCardInfo.cardInfo.endDate).format('MM/YY')}
            cvv={debitCardInfo.cardInfo.cvv}
            hideNumber={hideCard}
          />
        </View>

        <View style={styles.wrapLogo}>
          <Image source={IMAGES.VISA_LOGO} resizeMode={'contain'} />
        </View>
      </View>
    )
  }, [
    debitCardInfo.cardInfo.cardNumber,
    debitCardInfo.cardInfo.cvv,
    debitCardInfo.cardInfo.endDate,
    debitCardInfo.cardInfo.firstName,
    debitCardInfo.cardInfo.lastName,
    hideCard,
  ])

  return (
    <View style={styles.container}>
      {renderButtonHideCardNumber()}
      {renderCard()}
    </View>
  )
}

export default React.memo(Card)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    top: -(CARD_HEIGHT * (1 / 3) + 44),
    alignItems: 'flex-end',
  },
  hideCardNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingHorizontal: 14,
    top: 10,
    paddingBottom: 8 + 10, // PaddingBottom + 10 that we add to top
    paddingTop: 8,
    backgroundColor: 'white',
  },
  iconHideCard: {
    width: 14,
    aspectRatio: 1,
  },
  hideCardNumberText: {
    marginLeft: 4,
    color: COLORS.PRIMARY,
  },

  /**
   * Card style
   */
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
    padding: 24,
    backgroundColor: COLORS.PRIMARY,
  },
  wrapLogo: {
    alignItems: 'flex-end',
  },
  wrapCardInfo: {
    flex: 1,
    paddingTop: 24,
  },
  cardHolderName: {
    letterSpacing: 0.53,
    color: COLORS.WHITE,
  },
})
