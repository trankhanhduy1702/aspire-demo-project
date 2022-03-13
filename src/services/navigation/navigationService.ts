import { createRef } from 'react'

import { NavigationContainerRef } from '@react-navigation/native'

export const navigationRef =
  createRef<NavigationContainerRef<ReactNavigation.RootParamList>>()

const navigate = (name: string, params = {}) => {
  // @ts-ignore
  navigationRef.current?.navigate(name, params)
}

const goBack = () => {
  navigationRef.current?.goBack()
}

export const NavigationService = {
  navigate,
  goBack,
}
