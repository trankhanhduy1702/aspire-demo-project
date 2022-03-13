import { element, by, expect } from 'detox'

const LandingDebitCardScreen = async () => {
  await expect(element(by.id('DebitCardScreen'))).toBeVisible()
}

const OpenLimitScreen = async () => {
  await expect(
    element(by.id('DebitCardScreen_ListOption_SpendingLimit')),
  ).toBeVisible()

  await element(
    by.id('DebitCardScreen_ListOption_SpendingLimit_Switch_Button'),
  ).tap()

  await expect(element(by.id('LimitScreen'))).toBeVisible()
}

export const SwitchOnLimitFeature = async () => {
  await LandingDebitCardScreen()
  await OpenLimitScreen()
}
