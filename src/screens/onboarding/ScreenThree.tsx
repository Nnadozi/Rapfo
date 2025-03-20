import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const ScreenThree = () => {
  const nav = useNavigation()
  return (
    <Page>
      <MyText>Screen Three</MyText>
      <MyButton title='Next' onPress={ () => nav.navigate('Paywall')} />
    </Page>
  )
}

export default ScreenThree

const styles = StyleSheet.create({})