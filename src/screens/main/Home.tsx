import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
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


const Home = () => {
  const nav = useNavigation()
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
      <MyText color='gray' fontSize='small' style={{marginTop:'3%'}}>Fun Stuff </MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2.5%"}} />
      <MyText fontSize='small' style={{ marginVertical: "2%"}}>
        <MyText fontSize='small' bold>Fun fact:</MyText> Humans have unique tongue prints, just like fingerprints
      </MyText>
      <MyText fontSize='small' style={{ marginVertical: "2%", flexDirection: "row", alignItems: "center" }}>
        <MyText fontSize='small' bold>Quote Of The Day:</MyText> "This is the quote of the day" - Chikaosolu Nnadozie
      </MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2%"}} />
      <MyText>Current Rank: RANK</MyText>
      <MyText>text</MyText>
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
  }
})
