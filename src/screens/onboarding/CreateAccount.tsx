import { StyleSheet } from 'react-native'
import React from 'react'
import OnboardingPage from '../../components/OnboardingPage'

const CreateAccount = () => {
  return (
    <OnboardingPage 
    title='Create Account' 
    subTitle='Sign up to save your progress, rank up, and sync across devices!'
    progress={100}
    nextScreen={'Paywall'}
    />
  )
}

export default CreateAccount

const styles = StyleSheet.create({})