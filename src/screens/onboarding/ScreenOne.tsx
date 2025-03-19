import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import ProgressBar from '../../components/ProgressBar'

const ScreenOne = () => {
  return (
    <Page>
      <ProgressBar progress={0.4} />
    </Page>
  )
}

export default ScreenOne

const styles = StyleSheet.create({})