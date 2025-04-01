import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import Page from '../../components/Page'
import RevenueCatUI from 'react-native-purchases-ui';
import Purchases from 'react-native-purchases'


const Paywall = () => {
  const nav = useNavigation()
  async function getOfferings(){
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
        console.log("They are offerings")
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() =>{
    getOfferings()
  },[])
  return (
    <Page>
      <MyButton title='Skip' onPress={() => nav.navigate('ChooseTopic')} />
    </Page>
  )
}

export default Paywall

const styles = StyleSheet.create({})