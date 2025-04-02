import { StyleSheet } from 'react-native'
import React from 'react'
import OnboardingPage from '../../components/OnboardingPage'

const EnableNotifications = () => {
  return (
    <OnboardingPage 
    title='Enable Notifications' 
    subTitle='Turn on notifications so you never miss a daily gist.'
    progress={0.8}
    nextScreen={'CreateAccount'}
    />
  )
}

export default EnableNotifications

const styles = StyleSheet.create({})