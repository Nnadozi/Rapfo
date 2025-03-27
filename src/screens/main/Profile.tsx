import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'

const Profile = () => {
  return (
    <Page>
      <MyText bold>Account</MyText>
      <MyText>
        Profile picture, account deletion, restore purchases, delete account, topic preferences,
        edit profile, signout, join date, streak, rank (newbie, explorer, scholar, savant, mastermind), badges
      </MyText>
      <MyText bold>Settings</MyText>
      <MyText>Theme, language, privacy policy, support, version, notifications, feedback</MyText>
    </Page>
  )
}


export default Profile

const styles = StyleSheet.create({})