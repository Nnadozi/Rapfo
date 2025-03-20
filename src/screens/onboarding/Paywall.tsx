import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import Page from '../../components/Page'

const Paywall = () => {
  const nav = useNavigation()
  function processPayment(){

  }
  return (
    <Page>
      <MyText>Paywall</MyText>
      <MyButton title='pay' onPress={processPayment}  />
      <MyButton title='skip' onPress={ () => nav.navigate("Main")}  />
    </Page>
  )
}

export default Paywall

const styles = StyleSheet.create({})