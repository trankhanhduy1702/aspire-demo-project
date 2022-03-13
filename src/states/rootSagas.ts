import { all } from 'redux-saga/effects'

import { DebitCardSagas } from '@states/debitCard/debitCard.saga'
import { SpendingLimitSagas } from '@states/spendingLimit/spendingLimit.saga'

export default function* rootSagas() {
  yield all([DebitCardSagas(), SpendingLimitSagas()])
}
