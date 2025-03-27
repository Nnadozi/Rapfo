import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/onboarding/Welcome'
import Features from '../screens/onboarding/Features'
import Personalization from '../screens/onboarding/Personalization'
import Paywall from '../screens/onboarding/Paywall'

const OnboardNav = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Features' component={Features} />
      <Stack.Screen name='Personalization' component={Personalization} />
      <Stack.Screen name='Paywall' component={Paywall} />
    </Stack.Navigator>
  )
}

export default OnboardNav

const styles = StyleSheet.create({})