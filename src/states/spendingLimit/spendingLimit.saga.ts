import { takeLatest, call, put } from '@redux-saga/core/effects'
import { StrictEffect } from '@redux-saga/types'

import { delay } from '@helpers/global.helper'
import { getSpendingLimitApi } from '@services/apis/spendingLimit.api'
import { getSpendingLimitList } from '@states/spendingLimit/spendingLimit.action'
import {
  startGetSpendingLimitList,
  getSpendingLimitListSuccess,
  getSpendingLimitListFail,
} from '@states/spendingLimit/spendingLimit.slice'

function* getSpendingLimitListSaga(): Generator<StrictEffect, void, number[]> {
  try {
    yield put(startGetSpendingLimitList())

    const result = yield call(getSpendingLimitApi)

    // This delay use to fake a fetch data
    // @ts-ignore
    yield delay(500)

    yield put(getSpendingLimitListSuccess(result))
  } catch (error) {
    yield put(getSpendingLimitListFail(error as Error))
  }
}

export function* SpendingLimitSagas(): Generator<
  StrictEffect,
  void,
  undefined
> {
  yield takeLatest(getSpendingLimitList.toString(), getSpendingLimitListSaga)
}
