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
      <MyText style={{marginVertical:"1%"}} textAlign='center' fontSize='small'>Expand your knowledge in just
         <MyText fontSize='small' bold> 5 minutes</MyText> a day.
      </MyText>
      <MyButton style={{marginVertical:"3%"}} width='85%' title='Get Started' onPress={ () => nav.navigate('Overview')} />
    </Page>
  )
}

//      <MyButton type='outline' width='85%' title='Returning User? Log in' onPress={ () => nav.navigate('Authentication')} />

export default Welcome

const styles = StyleSheet.create({
  img:{
    width:"30%",
    height:undefined,
    borderRadius:30,
    aspectRatio:1,
    marginVertical:"03%"
  }
})