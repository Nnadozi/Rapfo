import { StyleSheet } from 'react-native'
import React from 'react'
import OnboardingPage from '../../components/OnboardingPage'

const EnableNotifications = () => {
  return (
    <OnboardingPage 
    title='Enable Notifications' 
    subTitle='So you never miss a daily gist.'
    progress={0.8}
    nextScreen={'Paywall'}
    />
  )
}

export default EnableNotifications

const styles = StyleSheet.create({})