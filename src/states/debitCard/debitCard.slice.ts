import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'

import { DebitCardInfoType } from '@interfaces/debitCard/debitCard.interface'

import { DebitCardStateType } from './debitCard.interface'
import { generateAlreadySpend } from '@helpers/global.helper'

const initialState: DebitCardStateType = {
  isLoading: false,
  error: null,
  debitCardInfo: {
    cardInfo: {
      firstName: '',
      lastName: '',
      cardNumber: '0000000000000000',
      endDate: moment().format(),
      cvv: '000',
    },
    currentAmount: 0,
    alreadySpend: 0,
    spendingLimit: 0,
    activeSpendingLimit: false,
  },
}

export const debitCardSlice = createSlice({
  name: 'debitCard',
  initialState,
  reducers: {
    startGetDebitCardInfo: (state) => {
      state.isLoading = true
      state.error = null
    },
    getDebitCardInfoSuccess: (
      state,
      action: PayloadAction<DebitCardInfoType>,
    ) => {
      state.isLoading = false
      state.debitCardInfo = action.payload
    },
    getDebitCardInfoFail: (state, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },

    updateActiveSpendingLimit: (state, action: PayloadAction<boolean>) => {
      state.debitCardInfo = {
        ...state.debitCardInfo,
        alreadySpend: action.payload ? generateAlreadySpend() : 0,
        spendingLimit: 0,
        activeSpendingLimit: action.payload,
      }
    },
    updateSpendingLimit: (state, action: PayloadAction<number>) => {
      state.debitCardInfo = {
        ...state.debitCardInfo,
        spendingLimit: action.payload,
      }
    },
  },
})

export const {
  startGetDebitCardInfo,
  getDebitCardInfoSuccess,
  getDebitCardInfoFail,
  updateActiveSpendingLimit,
  updateSpendingLimit,
} = debitCardSlice.actions

export const debitCardReducer = debitCardSlice.reducer
