import { element, by, expect } from 'detox'

const LandingDebitCardScreen = async () => {
  await expect(element(by.id('DebitCardScreen'))).toBeVisible()
}

const HideCardNumberFeature = async () => {
  await expect(
    element(by.id('DebitCardScreen_Card_HideCardNumber_Button')),
  ).toHaveLabel('Hide card number')

  await expect(
    element(by.id('DebitCardScreen_Card_CardNumber_Visible_Container')),
  ).toBeVisible()

  await element(by.id('DebitCardScreen_Card_HideCardNumber_Button')).tap()

  await expect(
    element(by.id('DebitCardScreen_Card_HideCardNumber_Button')),
  ).toHaveLabel('Show card number')

  await expect(
    element(by.id('DebitCardScreen_Card_CardNumber_Invisible_Container')),
  ).toBeVisible()
}

export const ShowAndHideCardNumber = async () => {
  await LandingDebitCardScreen()
  await HideCardNumberFeature()
}
