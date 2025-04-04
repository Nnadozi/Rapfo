import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/onboarding/Welcome'
import Paywall from '../screens/onboarding/Paywall'
import Overview from '../screens/onboarding/Overview'
import ChooseTopic from '../screens/onboarding/ChooseTopic'
import ChooseTheme from '../screens/onboarding/ChooseTheme'
import EnableNotifications from '../screens/onboarding/EnableNotifications'

const OnboardNav = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Overview' component={Overview} />
      <Stack.Screen name='ChooseTopic' component={ChooseTopic} />
      <Stack.Screen name='ChooseTheme' component={ChooseTheme} />
      <Stack.Screen name='EnableNotifications' component={EnableNotifications} />
      <Stack.Screen name='Paywall' component={Paywall} />
    </Stack.Navigator>
  )
}

export default OnboardNav

const styles = StyleSheet.create({})