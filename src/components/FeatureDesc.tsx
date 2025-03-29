import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText';
import { Icon } from '@rneui/base';

interface FeatureDescProps {
    title:string;
    subTitle:string
    iconName:string;
    iconType?:string;
}

const FeatureDesc = ({title, subTitle, iconName, iconType}: FeatureDescProps) => {
  return (
    <View style = {styles.con}>
      <View style = {styles.topRow}>
        <MyText textAlign='left' color='white' bold fontSize='large'>{title}</MyText>
        <Icon color='white' size={25} name={iconName} type={iconType} />
      </View>
      <MyText color='white'>{subTitle}</MyText>
    </View>
  )
}

export default FeatureDesc

const styles = StyleSheet.create({
    con:{
        backgroundColor:"#41AFEF",
        width:"90%",
        height:"22%",
        borderRadius:10,
        alignItems: 'flex-start',
        padding:"5%",
        marginVertical:"2%"
    },
    topRow:{
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        gap:"3%"
    }
})