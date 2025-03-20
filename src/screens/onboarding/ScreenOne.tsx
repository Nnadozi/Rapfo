import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import ProgressBar from '../../components/ProgressBar'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const ScreenOne = () => {
  const nav = useNavigation()
  return (
    <Page>
      <MyText>Screen One</MyText>
      <MyButton title='Next' onPress={ () => nav.navigate('OnboardingTwo')} />
    </Page>
  )
}

export default ScreenOne

const styles = StyleSheet.create({})