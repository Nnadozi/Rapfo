import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSettingsStore } from '../stores/useSettingStore';
import MyText from './MyText';
import MyIcon from './MyIcon';
import * as Progress from 'react-native-progress';

interface AchievementProps {
  title:string;
  desc:string;
  progress:number;
}

const Achievement = (props: AchievementProps) => {
  const {navigationTheme} = useSettingsStore()
  return (
    <View style = {styles.con}>
      <View style={{flexDirection:"row", alignItems:"center", gap:"3%",}}>
        <MyIcon  size={30} name='trophy' type='entypo' />
        <View>
          <MyText bold fontSize='biggerSmall'>{props.title}</MyText>
          <MyText fontSize='small'>{props.desc}</MyText>
        </View>
      </View>
      <View style = {{flexDirection:"row", alignItems:"center",gap:'3%'}}>
        <MyText bold color='primary' fontSize='small'>{props.progress * 100}%</MyText>
        <Progress.Bar 
          height={5} width={300}
          style = {styles.progress}
          progress={props.progress} 
          color={navigationTheme.colors.primary} 
        />
      </View>
    </View>
  )
}

export default Achievement

const styles = StyleSheet.create({
  con:{
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginVertical:"1%",
    maxWidth:"100%",
    //borderWidth:1,
  },
  progress:{
    marginVertical:"3%"
  }
})