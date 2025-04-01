import { StyleSheet } from 'react-native'
import React from 'react'
import OnboardingPage from '../../components/OnboardingPage'

const ChooseTheme = () => {
  return (
    <OnboardingPage 
    title='Pick Your Theme' 
    subTitle='You can change this later'
    progress={60}
    nextScreen={'EnableNotifications'}
    />
  )
}

export default ChooseTheme

const styles = StyleSheet.create({})