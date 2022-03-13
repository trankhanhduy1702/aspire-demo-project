import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CreditScreen from '@screens/Credit/CreditScreen'
import DebitCardScreen from '@screens/DebitCard/DebitCard/DebitCardScreen'
import HomeScreen from '@screens/Home/HomeScreen'
import PaymentsScreen from '@screens/Payments/PaymentsScreen'
import ProfileScreen from '@screens/Profile/ProfileScreen'

import CustomBottomTabBar from './CustomBottomTabBar'

const BottomTab = createBottomTabNavigator()

const Dashboard: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'DebitCardScreen'}
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name={'HomeScreen'} component={HomeScreen} />
      <BottomTab.Screen name={'DebitCardScreen'} component={DebitCardScreen} />
      <BottomTab.Screen name={'PaymentsScreen'} component={PaymentsScreen} />
      <BottomTab.Screen name={'CreditScreen'} component={CreditScreen} />
      <BottomTab.Screen name={'ProfileScreen'} component={ProfileScreen} />
    </BottomTab.Navigator>
  )
}

export default Dashboard
