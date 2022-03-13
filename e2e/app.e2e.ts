import { device } from 'detox'

import { NotUpdateSpendingLimit } from '../e2e/specs/debitCard/notUpdateSpendingLimit.spec'
import { SwitchOnLimitFeature } from '../e2e/specs/debitCard/openLimitScreen.spec'
import { ShowAndHideCardNumber } from '../e2e/specs/debitCard/showAndHideCardNumber.spec'
import { UpdateSpendingLimit } from '../e2e/specs/debitCard/updateSpendingLimit.spec'
import { AppLaunched } from '../e2e/utils'

describe('As a user', () => {
  beforeAll(AppLaunched)

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Debit Screen - Show and hide card number', ShowAndHideCardNumber)

  it('Debit Screen - Go to limit screen', SwitchOnLimitFeature)

  it('Spending Limit Screen - Update spending limit data', UpdateSpendingLimit)

  it(
    'Spending Limit Screen - Not Update spending limit data',
    NotUpdateSpendingLimit,
  )
})
