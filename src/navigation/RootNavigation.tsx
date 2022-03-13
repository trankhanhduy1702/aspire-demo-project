import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from 'navigation/Dashboard'

import LimitScreen from '@screens/DebitCard/Limit/LimitScreen'
import { navigationRef } from '@services/navigation/navigationService'

const Stack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
        <Stack.Screen name={'LimitScreen'} component={LimitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
