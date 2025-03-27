import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import Markdown from "react-native-markdown-display"

//#3d8af5
const apiKey = process.env.EXPO_PUBLIC_API_KEY

const Home = () => {
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
    <Page>
      <MyText bold >Daily Digest</MyText>
      <MyText>Share, favorite, progress indicator</MyText>
      <MyText bold >Other</MyText>
      <MyText>Welcome greeting, current streak, rankup / badge notifications</MyText>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({})
