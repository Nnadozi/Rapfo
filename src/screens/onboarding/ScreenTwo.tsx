import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const ScreenTwo = () => {
  const nav = useNavigation()
  return (
    <Page>
      <MyText>Screen Two</MyText>
      <MyButton title='Next' onPress={ () => nav.navigate('OnboardingThree')} />
    </Page>
  )
}

export default ScreenTwo

const styles = StyleSheet.create({})