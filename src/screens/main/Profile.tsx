import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import { useSettingsStore } from '../../stores/useSettingStore'
import MyButton from '../../components/MyButton'
import { getLocales, getCalendars } from 'expo-localization';

const Profile = () => {
  const { theme, setTheme } = useSettingsStore();
  useEffect(() =>{
    console.log(getLocales()[0].textDirection)
    console.log(getLocales()[0].languageCode)
  },[])
  return (
    <Page>
      <MyText bold>Account</MyText>
      <MyText>
        Profile picture, account deletion, restore purchases, delete account, topic preferences,
        edit profile, signout, join date, streak, rank (newbie, explorer, scholar, savant, mastermind), badges
      </MyText>
      <MyText bold>Settings</MyText>
      <MyText>Theme, language, privacy policy, support, version, notifications, feedback</MyText>
      <MyText>Selected Theme: {theme}</MyText>
      <MyButton title="Light Mode" onPress={() => setTheme('light')} />
      <MyButton title="Dark Mode" onPress={() => setTheme('dark')} />
      <MyButton type='outline' title="System Default" onPress={() => setTheme('system')} />
    </Page>
  )
}


export default Profile

const styles = StyleSheet.create({})