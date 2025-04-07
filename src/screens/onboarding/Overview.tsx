import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import OnboardingPage from '../../components/OnboardingPage'
import MyText from '../../components/MyText'
import { useSettingsStore } from '../../stores/useSettingStore'
import { Divider } from '@rneui/base'
import MyButton from '../../components/MyButton'
import MyIcon from '../../components/MyIcon'

const Overview = () => {
  const {navigationTheme} = useSettingsStore()
  return (
    <OnboardingPage 
    title='How It Works' 
    subTitle='A simple breakdown'
    progress={0.2}
    nextScreen={'ChooseTopic'}
    >
      <View style = {styles.mainCon}>

        <View style={styles.con}>
          <View style = {[styles.topRow,{borderColor:navigationTheme.colors.primary}]}>
            <MyIcon color='primary' name='book' type='entypo'/>
            <MyText color='primary' bold fontSize='large'>Read Daily Gists</MyText>
          </View>
          <MyText style={[styles.textCon,{backgroundColor:navigationTheme.colors.primary}]} reversedColor>
            Every day, Rapfo gives you a short gist on something interesting, from science to history to tech.
          </MyText>
        </View>

        <View style={styles.con}>
          <View style = {[styles.topRow,{borderColor:navigationTheme.colors.primary}]}>
            <MyIcon color='primary'  name='offline-bolt'/>
            <MyText color='primary'  bold fontSize='large'>Just 5 Minutes Daily</MyText>
          </View>
          <MyText style={[styles.textCon,{backgroundColor:navigationTheme.colors.primary}]}  reversedColor>
            Each gist is bite-sized. No fluff, just facts. Learn something valuable in under 5 minutes.
          </MyText>
        </View>

        <View style={styles.con}>
          <View style = {[styles.topRow,{borderColor:navigationTheme.colors.primary}]}>
            <MyIcon color='primary' name='bar-graph' type='entypo'/>
            <MyText color='primary'  bold fontSize='large'>Track Progress</MyText>
          </View>
          <MyText style={[styles.textCon,{backgroundColor:navigationTheme.colors.primary}]}  reversedColor>
            Stay consistent to build your streak, earn achievements, and level up your rank as a rapid learner.
          </MyText>
        </View>

      </View>
    </OnboardingPage>
  )
}

export default Overview

const styles = StyleSheet.create({
  mainCon:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    gap:"3%",
    //borderWidth:1
  },
  con:{
    width:"90%",
    borderRadius:20,
  },
  topRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:"3%",
    width:'100%',
    borderWidth:2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:"3%",
    marginBottom:"2%"
  },
  textCon:{
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    padding:"4%"
  }
})
