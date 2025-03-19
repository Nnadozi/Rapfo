import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Paywall from '../screens/onboarding/Paywall'
import ScreenOne from '../screens/onboarding/ScreenOne'
import ScreenTwo from '../screens/onboarding/ScreenTwo'
import ScreenThree from '../screens/onboarding/ScreenThree'

const OnboardNav = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='OnboardingOne' component={ScreenOne} />
      <Stack.Screen name='OnboardingTwo' component={ScreenTwo} />
      <Stack.Screen name='OnboardingThree' component={ScreenThree} />
      <Stack.Screen name='Paywall' component={Paywall} />
    </Stack.Navigator>
  )
}

export default OnboardNav

const styles = StyleSheet.create({})