import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyIcon from './MyIcon';
import MyText from './MyText';

interface SettingsHeaderProps {
    title:string;
    iconName:string;
    iconType?: string; 
    iconSize?: number;
    children?: React.ReactNode;
}
const SettingsHeader = (props:SettingsHeaderProps) => {
  return (
    <View style = {styles.con} >
      <View style = {styles.headerRow}>
        <MyIcon  name={props.iconName} type={props.iconType} />
        <MyText bold >{props.title}</MyText>
      </View>
      {props.children}
    </View>
  )
}

export default SettingsHeader

const styles = StyleSheet.create({
  con:{
    marginVertical:"4%",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    //borderWidth:1
  },
  headerRow:{
    flexDirection:"row",
    gap:5
  }
})