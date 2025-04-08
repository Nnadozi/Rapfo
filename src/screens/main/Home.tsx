import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import Markdown from "react-native-markdown-display"
import DigestPreview from '../../components/DigestPreview';
import { Divider } from '@rneui/base';
import Achievement from '../../components/Achievement';
import MyIcon from '../../components/MyIcon';
import { useNavigation } from '@react-navigation/native';
import { useSettingsStore } from '../../stores/useSettingStore';


const Home = () => {
  const nav = useNavigation()
  const {navigationTheme} = useSettingsStore()
  return (
    <Page style={{alignItems:"flex-start", justifyContent:"flex-start",paddingBottom:"5%"}}>
      <View style={styles.topRow}>
      <MyText fontSize='XL' bold>Home</MyText>
      <MyIcon onPress={() => nav.navigate('Settings')} name='settings' size={30} />
      </View>
      <MyText style={{marginVertical:"2%"}} fontSize='small'>
        🔥 Current Streak: <MyText fontSize='small' bold>5</MyText> - Keep it up!
      </MyText>
      <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
      <MyText color='gray' fontSize='small'>Upcoming Achievements </MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2.5%"}} />
      <Achievement progress={0.9} title='Five for Five' desc='Logged in and learn for 5 days straight.'/>
      <Achievement progress={0.87} title='Top Ranker' desc='Reach the highest rank in the system. '/>
      <MyText style={{marginTop:"1%"}}  color='gray' fontSize='small'>Daily Trivia</MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2.5%"}} />
      <View style = {[styles.box]}>
        <View style = {[styles.icon,{
          backgroundColor:navigationTheme.colors.background,
          borderColor:navigationTheme.colors.primary
          }]}>
          <MyIcon color='primary' name='light-bulb' type='entypo' size={30} />
        </View>
        <MyText reversedColor fontSize='small' style={[styles.text,{backgroundColor:navigationTheme.colors.primary }]}>
          <MyText reversedColor fontSize='small' bold>Fun fact:
            </MyText> Humans have unique tongue prints, just like fingerprints
        </MyText>
      </View>
      <View style = {[styles.box]}>
        <View style = {[styles.icon,{
          backgroundColor:navigationTheme.colors.background,
          borderColor:navigationTheme.colors.primary
          }]}>
          <MyIcon color='primary' name='quote' type='entypo' size={30} />
        </View>
        <MyText reversedColor fontSize='small' style={[styles.text,{backgroundColor:navigationTheme.colors.primary }]}>
          <MyText reversedColor fontSize='small' bold>Quote of the day:
            </MyText> "This is the quote of the day" - Chikaosolu Nnadozie"
        </MyText>
      </View>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2.5%"}} />
      <MyText>Current Rank: Novice</MyText>
      <TouchableOpacity>
        <MyText fontSize='small' color='primary' bold>See Rank Requirements ></MyText>
      </TouchableOpacity>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  topRow:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%"
  },
  box:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%",
    marginVertical:"2%",
  },
  icon:{
    alignItems: "center",
    justifyContent: "center",
    padding:'2%',
    borderWidth:3.4,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
  },
  text:{
    flex:1,
    padding:"2%",
    borderTopRightRadius:15,
    borderBottomRightRadius:15
  }
})
