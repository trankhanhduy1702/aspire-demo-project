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

const SelectLimitMoneyAndGoBack = async () => {
  await element(by.id('SpendingLimitScreen_ListLimit_Item_1_Button')).tap()
  await element(by.id('LimitScreen_Save_Button')).tap()
  await expect(element(by.id('DebitCardScreen'))).toBeVisible()
  await expect(
    element(by.id('DebitCardScreen_SpendingLimit_Container')),
  ).toBeVisible()
}

export const UpdateSpendingLimit = async () => {
  await LandingDebitCardScreen()
  await OpenLimitScreen()
  await SelectLimitMoneyAndGoBack()
}
