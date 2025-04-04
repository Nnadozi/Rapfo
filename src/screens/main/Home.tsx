import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import Markdown from "react-native-markdown-display"
import DigestPreview from '../../components/DigestPreview';
import { Divider } from '@rneui/base';
import Badge from '../../components/Badge';
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
      <MyText style={{marginVertical:"2%"}} fontSize='small'>🔥 Current Streak: 5 - Keep it up</MyText>
      <MyText style={{marginTop:"2%"}} fontSize='small'>Today's Digest</MyText>
      <DigestPreview title='The Sun' category='Science' readingTime={5} date='April 7th, 2025'/>
      <MyText color='gray' fontSize='small'>Upcoming Badges</MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"3%"}} />
      <Badge/>
      <Badge/>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"3%"}} />
      <MyText>Quote Of The Day</MyText>
      <MyText>Fun Fact</MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"3%"}} />
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
