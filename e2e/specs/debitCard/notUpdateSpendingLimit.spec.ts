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

const NotSelectLimitMoneyAndGoBack = async () => {
  await element(by.id('SpendingLimitScreen_ListLimit_Item_1_Button')).tap()
  await element(by.id('Header_Go_Back_Button')).tap()
  await expect(element(by.id('DebitCardScreen'))).toBeVisible()

  await expect(
    element(by.id('DebitCardScreen_SpendingLimit_Container')),
  ).toBeNotVisible()
}

export const NotUpdateSpendingLimit = async () => {
  await LandingDebitCardScreen()
  await OpenLimitScreen()
  await NotSelectLimitMoneyAndGoBack()
}
