import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import { useNavigation, useRoute } from '@react-navigation/native'
import MyIcon from '../../components/MyIcon'
import { Divider } from '@rneui/base'
import MyButton from '../../components/MyButton'

const DailyDigest = ({route}) => {
  const {title, topic, category, readingTime, digest} = route.params
  const nav = useNavigation()
  function logDigest(){
    console.log("Daily digest read.")
    nav.goBack();
  }
  return (
    <Page style={{justifyContent:"flex-start",alignItems:"flex-start", paddingBottom:"5%"}}>
      <MyIcon onPress={nav.goBack} name='arrow-back' size={20} containerStyle={{marginBottom:"3%"}} />
      <MyText bold fontSize='XL'>{title}</MyText>
      <View style = {styles.topRow}>
        <MyText fontSize='small'>{category}: {topic}</MyText>
        <View style = {{flexDirection:"row",gap:7.5}}>
          <MyIcon name='clockcircle' type='antdesign' size={15} />
          <MyText bold fontSize='small'>{readingTime} min</MyText>
        </View>
      </View>
      <Divider style = {{width:"100%", alignSelf:"center",marginVertical:'3%'}} width={1} />
      <ScrollView contentContainerStyle = {{paddingBottom:"5%"}}>
        <MyText style={{marginTop:"3%"}} fontSize='biggerSmall'>{digest}</MyText>
        <MyButton 
        title='Cool!' onPress={logDigest} width='80%' size='md'
        style={{alignSelf:"center", marginTop:"7.5%"}} />
      </ScrollView>
    </Page>
  )
}

export default DailyDigest

const styles = StyleSheet.create({
  topRow:{
    flexDirection:"row",
    width:"100%",
    alignItems:"center",
    justifyContent:'space-between',
    marginVertical:"1%"
  }
})
