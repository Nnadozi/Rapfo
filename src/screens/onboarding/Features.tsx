import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import FeatureDesc from '../../components/FeatureDesc'

const Features = () => {
  const nav = useNavigation()
  return (
    <Page customBackground> 
      <View style={styles.con}>
        <View style = {styles.topRow}>
          <View style = {styles.icon}>
            <Icon size={25} name='chevron-back-outline' type='ionicon' onPress={ nav.goBack} />
          </View>
          <View>
            <MyText textAlign='center' bold fontSize='XL'>How It Works</MyText>
            <MyText textAlign='center' fontSize='small'>A simple breakdown</MyText>
          </View>
        </View>
        <View style = {styles.mainCon}>
          <FeatureDesc iconName='school' title='Daily Gists' subTitle='Spend 5 minutes learning something new every day.'/>
          <FeatureDesc iconName='history' title='History' subTitle='Track your progress and revisit gists.'/>
          <FeatureDesc iconName='category'  title='Personalized' subTitle='Topics tailored to your interests.'/>
          <FeatureDesc iconName='hand' iconType='entypo' title='Interactive' subTitle='Save, share, and like gists.'/>
        </View>
        <MyButton width='85%' title='Next' onPress={ () => nav.navigate('Personalization')} />
      </View>
    </Page>
  )
}

export default Features

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
