import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import MyIcon from '../../components/MyIcon'
import { useNavigation, useNavigationBuilder } from '@react-navigation/native'


const Login = () => {
  const nav = useNavigation()
  const temp = () => {

  }
  return (
    <Page customBackground>
      <MyIcon 
      onPress={ nav.goBack}
      name='cancel' size={30} containerStyle={{position:"absolute", top:"5%", left:"5%"}} />
      <MyText bold fontSize = "XL">Log In</MyText>
      <View style = {styles.buttonCon}>
        <MyButton iconName='google' iconType='antdesign' title='Sign in with Google' width='85%' onPress={temp} />
        <MyButton iconName='apple' title='Sign in with Apple' width='85%' onPress={temp}  />
        <MyButton iconName='email' title='Sign in with Email' width='85%' onPress={temp}  />
      </View>
    </Page>
  )
}

export default Login

const styles = StyleSheet.create({
  buttonCon:{
    width:'100%',
    height:"21%",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:"5%"
  }
})