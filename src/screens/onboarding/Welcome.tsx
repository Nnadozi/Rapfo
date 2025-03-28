import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Image } from '@rneui/themed/dist/Image'

const Welcome = () => {
  const nav = useNavigation()
  return (
    <Page customBackground style={{justifyContent:"center", alignItems:"center"}}>
      <Image resizeMode='contain' style={styles.img} source={require('../../../assets/images/icon.png')} />
      <MyText bold fontSize='XL'>Welcome to Rapfo!</MyText>
      <MyText textAlign='center' fontSize='small'>Learn something new in just 5 minutes a day.</MyText>
      <MyButton style={{marginTop:"5%"}} width='85%' title='Get Started' onPress={ () => nav.navigate('Features')} />
    </Page>
  )
}

export default Welcome

const styles = StyleSheet.create({
  img:{
    width:"30%",
    height:undefined,
    borderRadius:30,
    aspectRatio:1,
    marginVertical:"5%"
  }
})