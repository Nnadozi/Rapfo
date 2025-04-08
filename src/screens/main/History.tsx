import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyText from '../../components/MyText'
import Page from '../../components/Page'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { SearchBar } from '@rneui/base'
import { useSettingsStore } from '../../stores/useSettingStore'
import DigestPreview from '../../components/DigestPreview';

const History = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const {navigationTheme} = useSettingsStore()
  const nav = useNavigation()
  return (
    <Page style={{alignItems:"flex-start", justifyContent:"flex-start",paddingBottom:"3%"}}>
      <View style = {styles.topRow}>
        <MyText bold fontSize="XL">History</MyText>
        <MyButton iconColorReversed title='Filter' type='outline' iconName='filter' iconType='ionicon' size='md' />
      </View>
      <SearchBar 
        lightTheme
        inputContainerStyle={[styles.input,{backgroundColor:navigationTheme.colors.border}]}
        containerStyle={[styles.con,{backgroundColor:navigationTheme.colors.background}]}
        placeholder='Search'
        value={searchQuery} 
        onChangeText={text => setSearchQuery(text)} 
        inputStyle={{fontSize:16}}
      />
      <ScrollView style={styles.mainCon} contentContainerStyle={{gap:"1.5%",paddingBottom:"40%"}}>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
        <DigestPreview title='The Big Bang' category='Science' topic='Astronomy' readingTime={5} date='April 7th, 2025'/>
      </ScrollView>
    </Page>
  )
}

export default History

const styles = StyleSheet.create({
  mainCon:{
    width:"100%",
    marginTop:"15%",
    //borderWidth:1,
  },
  con:{
    marginTop:"3%",
    borderTopWidth:0,
    borderBottomWidth:0,
    alignSelf:'center',
    width:"105%",
    flex:1,
  },
  input:{
    borderRadius:50, 
    borderWidth:0, 
    height:40,
  },
  topRow:{
    flexDirection:'row',
    width:"100%",
    alignSelf:'center',
    justifyContent:"space-between",
    // borderWidth:1,
  }
})