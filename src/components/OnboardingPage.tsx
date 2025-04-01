import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from './Page';
import MyText from './MyText';
import MyIcon from './MyIcon';
import MyButton from './MyButton';
import { useNavigation } from '@react-navigation/native';

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
  return (
    <Page customBackground> 
    <View style={styles.con}>
      <View style = {styles.topRow}>
        <View style = {styles.icon}>
          <MyIcon size={25} name='chevron-back-outline' type='ionicon' onPress={ nav.goBack} />
        </View>
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
    topRow:{
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%"
    },
    icon:{
      position: 'absolute',
      left: "5%",
    },
    mainCon:{
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
      height:"80%"
    }
})