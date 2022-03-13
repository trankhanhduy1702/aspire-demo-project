import { takeLatest, call, put } from '@redux-saga/core/effects'
import { StrictEffect } from '@redux-saga/types'

import { delay } from '@helpers/global.helper'
import { DebitCardInfoType } from '@interfaces/debitCard/debitCard.interface'
import { getDebitCardInfoApi } from '@services/apis/getDebitCardInfo.api'
import { getDebitCardInfo } from '@states/debitCard/debitCard.action'
import {
  getDebitCardInfoSuccess,
  startGetDebitCardInfo,
  getDebitCardInfoFail,
} from '@states/debitCard/debitCard.slice'

function* getDebitCardInfoSaga(): Generator<
  StrictEffect,
  void,
  DebitCardInfoType
> {
  try {
    yield put(startGetDebitCardInfo())

    const result = yield call(getDebitCardInfoApi)

    // This delay use to fake a fetch data
    // @ts-ignore
    yield delay(1000)

    yield put(getDebitCardInfoSuccess(result))
  } catch (error) {
    yield put(getDebitCardInfoFail(error as Error))
  }
}

export function* DebitCardSagas(): Generator<StrictEffect, void, undefined> {
  yield takeLatest(getDebitCardInfo.toString(), getDebitCardInfoSaga)
}
