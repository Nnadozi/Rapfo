import { StyleSheet } from 'react-native'
import React from 'react'
import OnboardingPage from '../../components/OnboardingPage'

const ChooseTopic = () => {
  return (
    <OnboardingPage 
    title='Choose Topics' 
    subTitle='What interests you?'
    progress={40}
    nextScreen={'ChooseTheme'}
    />
  )
}

export default ChooseTopic

const styles = StyleSheet.create({})