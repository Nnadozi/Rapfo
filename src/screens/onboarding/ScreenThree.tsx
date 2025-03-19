import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Page from '../../components/Page'

const ScreenThree = () => {
  return (
    <Page>
      <ProgressBar showBack progress={0.3} />
    </Page>
  )
}

export default ScreenThree

const styles = StyleSheet.create({})