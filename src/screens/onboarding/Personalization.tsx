import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const Personalization = () => {
  const nav = useNavigation()
  return (
    <Page customBackground>
      <MyText>Personalization</MyText>
      <MyButton width='85%' title='Next' onPress={ () => nav.navigate('Paywall')} />
    </Page>
  )
}

/**
 * Title: “Customize Your Experience”

Content:

Theme: Choose Light/Dark Mode.

Interests: Select preferred topics (Science, History, etc.).

Notifications: Opt-in for daily reminders.

CTA: “Save Preferences” to continue.
 */

export default Personalization

const styles = StyleSheet.create({})