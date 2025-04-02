import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from './Page';
import MyText from './MyText';
import MyIcon from './MyIcon';
import MyButton from './MyButton';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { useSettingsStore } from '../stores/useSettingStore';

interface OnboardingPageProps {
    title:string;
    subTitle:string;
    nextScreen:string;
    buttonTitle?:string;
    progress:number;
    children?:React.ReactNode;
}


const OnboardingPage = (props: OnboardingPageProps) => {
  const nav = useNavigation();
  const {navigationTheme} = useSettingsStore()
  return (
    <Page customBackground> 
    <View style={styles.con}>
      <View style = {styles.barRow}>
        <MyIcon 
        color={navigationTheme.colors.primary}
        size={25} name='chevron-back-outline' 
        type='ionicon' onPress={nav.goBack} />
        <Progress.Bar 
        height={15} width={310}
        style = {styles.progress}
        useNativeDriver
        animationConfig={{bounciness:1}}
        animationType='spring' 
        progress={props.progress} 
        color={navigationTheme.colors.primary} />
      </View>
      <View style = {styles.titleRow}>
        <View>
          <MyText textAlign='center' bold fontSize='XL'>{props.title}</MyText>
          <MyText style={{maxWidth:"90%", alignSelf:"center"}} textAlign='center' fontSize='small'>{props.subTitle}</MyText>
        </View>
      </View>
      {props.children}
      <MyButton width='85%' title={props.buttonTitle ? props.buttonTitle : 'Next'} onPress={ () => nav.navigate(props.nextScreen)} />
    </View>
  </Page>
  )
}

export default OnboardingPage
const styles = StyleSheet.create({
    con:{
      flex: 1,
      justifyContent: "space-between",
      alignItems: 'center',
      width:"100%",
      paddingTop:"12.5%",
      paddingBottom:"10%"
    },
    titleRow:{
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%"
    },
    mainCon:{
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
      height:"80%"
    },
    barRow:{
      flexDirection:"row",
      width:"100%",
      justifyContent: 'center',
      alignItems: 'center',
      //borderWidth:1,
    },
    progress:{
      
    }
})