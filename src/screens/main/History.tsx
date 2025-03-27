import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../../components/MyText'
import Page from '../../components/Page'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const History = () => {
  const nav = useNavigation()
  return (
    <Page>
      <MyText>Search bar, filter (topic, favorite, date), favorites section</MyText>
      <MyButton title='Favorites' onPress={() => nav.navigate("Favorites")} />
    </Page>
  )
}

export default History

const styles = StyleSheet.create({})