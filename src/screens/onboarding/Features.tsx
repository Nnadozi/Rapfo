import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'

const Features = () => {
  const nav = useNavigation()
  return (
    <Page customBackground> 
      <View style={styles.con}>
        <View style = {styles.topRow}>
          <View style = {styles.icon}>
            <Icon size={25} name='chevron-back-outline' type='ionicon' onPress={ nav.goBack} />
          </View>
          <View>
            <MyText textAlign='center' bold fontSize='XL'>How It Works</MyText>
            <MyText textAlign='center' fontSize='small'>A simple breakdown</MyText>
          </View>
        </View>
        <MyButton width='85%' title='Next' onPress={ () => nav.navigate('Personalization')} />
      </View>
    </Page>
  )
}


export default Features

const styles = StyleSheet.create({
  con:{
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    width:"100%",
    paddingTop:"15%",
    paddingBottom:"12.5%"
  },
  topRow:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  icon:{
    position: 'absolute',
    left: "5%",
  }
})

//        <Icon size={30} name='arrow-back' onPress={ nav.goBack} />
/**
 * Title: "How It Works"

Content:

Daily Gists – Learn something new every day.

History – Track your progress and revisit gists.

Personalized Experience – Topics tailored to your interests.

Interactive Features – Save, share, and like gists.

CTA: “Next” or “Continue” to move to the next step.


 */