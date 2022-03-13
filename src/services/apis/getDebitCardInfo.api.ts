import moment from 'moment'

import {
  generateCardNumber,
  generateCurrentAmount,
  generateCVV,
} from '@helpers/global.helper'
import { DebitCardInfoType } from '@interfaces/debitCard/debitCard.interface'

export const getDebitCardInfoApi = async (): Promise<DebitCardInfoType> => {
  return Promise.resolve({
    cardInfo: {
      firstName: 'Mark',
      lastName: 'Henry',
      cardNumber: generateCardNumber(),
      endDate: moment().format(),
      cvv: generateCVV(),
    },
    currentAmount: generateCurrentAmount(),
    spendingLimit: 0,
    alreadySpend: 0,
    activeSpendingLimit: false,
  })
}
