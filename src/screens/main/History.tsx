import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyText from '../../components/MyText'
import Page from '../../components/Page'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { SearchBar } from '@rneui/base'
import { useSettingsStore } from '../../stores/useSettingStore'

const History = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const {navigationTheme} = useSettingsStore()
  const nav = useNavigation()
  return (
    <Page style={{alignItems:"flex-start", justifyContent:"flex-start",paddingBottom:"5%"}}>
      <View style = {styles.topRow}>
        <MyText bold fontSize="XL">History</MyText>
        <MyButton size='md' title='filter' onPress={() => {}} />
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
    </Page>
  )
}

export default History

const styles = StyleSheet.create({
  con:{
    marginVertical:"3%",
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
    //borderWidth:1,
  }
})