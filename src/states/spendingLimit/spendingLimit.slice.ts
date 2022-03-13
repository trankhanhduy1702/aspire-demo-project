import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SpendingLimitStateType } from './spendingLimit.interface'

const initialState: SpendingLimitStateType = {
  isLoading: false,
  error: null,
  spendingLimitList: [],
}

export const spendingLimitSlice = createSlice({
  name: 'spendingLimit',
  initialState,
  reducers: {
    startGetSpendingLimitList: (state) => {
      state.isLoading = true
      state.error = null
    },
    getSpendingLimitListSuccess: (state, action: PayloadAction<number[]>) => {
      state.isLoading = false
      state.spendingLimitList = action.payload
    },
    getSpendingLimitListFail: (state, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  startGetSpendingLimitList,
  getSpendingLimitListSuccess,
  getSpendingLimitListFail,
} = spendingLimitSlice.actions

export const spendingLimitReducer = spendingLimitSlice.reducer
