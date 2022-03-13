import { by, device, expect, element } from 'detox'

export const AppLaunched = async () => {
  await device.launchApp({
    newInstance: true,
  })
  await expect(element(by.id('RootApplication'))).toBeVisible()
}

export const AppReset = async () => {
  await device.launchApp({
    delete: true,
  })
  await expect(element(by.id('RootApplication'))).toBeVisible()
}

export const AppReload = async () => {
  await device.reloadReactNative()
}

export const wait = async (time = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, time))
}
