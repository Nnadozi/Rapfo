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

const apiKey = process.env.EXPO_PUBLIC_API_KEY

const Home = () => {
  const nav = useNavigation()
  const [digest, setDigest] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  async function generateDigest() {
    console.log("Generating....")
    setLoading(true)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `Generate me a 1 minute digest about something cool astronomy related. Format it like this:
            ### **Title**
            **Subtitle**
            (Content)
            `
          }
        ],
      }), 
    });
    const data = await response.json();
    if (response.ok) {
      setDigest(data.choices[0].message.content)
      console.log(digest)
    } else {
      console.error("Error:", data);
      console.log("Failed to generate digest. Please try again.");
    }
    setLoading(false)
  }

  /**
   *       <ScrollView style = {{paddingTop:"10%"}}> 
        <MyText>My daily digest (5 minutes)</MyText>
        <MyButton title='generate digest' onPress={generateDigest} />
        {loading && (
          <ActivityIndicator size={'large'} color={'red'} />
        )}
        <Markdown>{digest}</Markdown>
      </ScrollView>
   */
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

      <View style ={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <MyIcon name="bulb1" type='antdesign' size={20} containerStyle={{marginRight:"2%"}}/>
        <MyText fontSize='small' style={{ marginVertical: "2%"}}>
          <MyText fontSize='small' bold>Fun fact:</MyText> Humans have unique tongue prints, just like fingerprints
        </MyText>
      </View>

      <View style ={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <MyIcon name="quote" type='entypo' size={20} containerStyle={{marginRight:"2%"}}/>
        <MyText fontSize='small' style={{ marginVertical: "2%", flexDirection: "row", alignItems: "center" }}>
          <MyText fontSize='small' bold>Quote Of The Day:</MyText> "This is the quote of the day" - Chikaosolu Nnadozie
        </MyText>
      </View>

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
