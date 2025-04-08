import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyText from './MyText';
import MyIcon from './MyIcon';
import { useNavigation } from '@react-navigation/native';
import { useSettingsStore } from '../stores/useSettingStore';

const apiKey = process.env.EXPO_PUBLIC_API_KEY
interface DigestPreviewProps {
  title:string;
  category:string;
  topic:string;
  readingTime:number;
  date:string;
}

const DigestPreview = ({title, topic, category, readingTime, date}: DigestPreviewProps) => {
  const {navigationTheme} = useSettingsStore()
  const [digest, setDigest] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigation()
  async function generateDigest(){
    console.log("Generating daily digest....")
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
            content: `Generate a markdown-formatted explanation about this topic: "${title}".
            - Do **not** include a title.
            - Use **headers**, **bold**, and *italic* for emphasis — but **no dividers**.
            - Keep it within approximately ${readingTime * 50} words (for a ${readingTime}-minute read).
            - The tone should be concise, engaging, and informative.
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
    nav.navigate("DailyDigest",{
      title:title, category:category, topic:topic, 
      readingTime:readingTime, digest:digest
    })
  }

  return (
    <ImageBackground imageStyle={styles.img} resizeMode='repeat' source={require('../../assets/images/background-digest.png')} style={styles.con}>
      <View style ={styles.content}>
          <View style={styles.topRow}>
            <View>
              <MyText reversedColor fontSize='large' bold>{title}</MyText>
              <MyText style={{marginVertical:"1%"}} reversedColor fontSize='small'>{category}: {topic}</MyText>
            </View>
            {loading ? (
              <ActivityIndicator size={'large'} color={navigationTheme.colors.card} />
            ): (
              <MyIcon reversedColor onPress={generateDigest} name='play' type='antdesign' size={50} />
            )}
          </View>
          <View style = {styles.bottomRow}>
            <View style = {{flexDirection:"row", alignItems:"center",gap:"10%"}}>
              <MyIcon reversedColor  name='clockcircle' type='antdesign' size={15} />
              <MyText reversedColor fontSize='small'>{readingTime} min</MyText>
            </View>
            <MyText reversedColor fontSize='small' >{date}</MyText>
          </View>
      </View>
    </ImageBackground>
  )
}

export default DigestPreview

const styles = StyleSheet.create({
  con:{
    marginTop:"3%",
    marginBottom:'8%',
    borderRadius:15,
    width:"100%",
    height:"20%",
    justifyContent:"space-between",
  },
  img:{
    width:"100%",
    height:"100%",
    alignSelf:"center",
    borderRadius:15,
  },
  content:{
    flex:1,
    justifyContent:"space-between",
    padding:"4%"
  },
  topRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  bottomRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  }
})


