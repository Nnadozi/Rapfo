import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import { useSettingsStore } from '../../stores/useSettingStore'
import MyButton from '../../components/MyButton'
import { getLocales, getCalendars } from 'expo-localization';

const Profile = () => {
  return (
    <Page style={{alignItems:"flex-start", justifyContent:"flex-start",paddingBottom:"5%"}}>
      <MyText bold fontSize = "XL">Statistics</MyText>
      <MyText>Current Rank:Novice</MyText>
      
      <MyText>Start Date: April 4th, 2025</MyText>
      <MyText>Total Reading Time: 2hr 5 min</MyText>
      <MyText>Total Digests Read: 32</MyText>
      <MyText>Current Streak: 5 days</MyText>
      <MyText>Longest Streak: 12 days</MyText>
      <MyText fontSize='small'>Keep on learning!</MyText>
    </Page>
  )
}


export default Profile

const styles = StyleSheet.create({})