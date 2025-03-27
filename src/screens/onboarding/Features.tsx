import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const Features = () => {
  const nav = useNavigation()
  return (
    <Page customBackground>
      <MyText>Features</MyText>
      <MyButton width='85%' title='Next' onPress={ () => nav.navigate('Personalization')} />
    </Page>
  )
}

/**
 * Title: "How It Works"

Content:

Daily Gists – Learn something new every day.

History – Track your progress and revisit gists.

Personalized Experience – Topics tailored to your interests.

Interactive Features – Save, share, and like gists.

CTA: “Next” or “Continue” to move to the next step.


 */

export default Features

const styles = StyleSheet.create({})