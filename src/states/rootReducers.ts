import { combineReducers } from '@reduxjs/toolkit'

import { debitCardReducer } from '@states/debitCard/debitCard.slice'
import { spendingLimitReducer } from '@states/spendingLimit/spendingLimit.slice'

export default combineReducers({
  debitCard: debitCardReducer,
  spendingLimit: spendingLimitReducer,
})
