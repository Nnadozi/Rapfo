import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import { useSettingsStore } from '../../stores/useSettingStore'
import MyButton from '../../components/MyButton'
import { getLocales, getCalendars } from 'expo-localization';

const Profile = () => {
  return (
    <Page>
      <MyText>
       topic preferences, streak, rank, badges
      </MyText>
    </Page>
  )
}


export default Profile

const styles = StyleSheet.create({})