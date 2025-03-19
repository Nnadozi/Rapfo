import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Page from '../../components/Page'

const ScreenTwo = () => {
  return (
    <Page>
      <ProgressBar showBack progress={0.3} />
    </Page>
  )
}

export default ScreenTwo

const styles = StyleSheet.create({})