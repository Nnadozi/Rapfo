import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'

const Personalization = () => {
  const nav = useNavigation()
  return (
    <Page customBackground> 
      <View style={styles.con}>
        <View style = {styles.topRow}>
          <View style = {styles.icon}>
            <Icon size={25} name='chevron-back-outline' type='ionicon' onPress={ nav.goBack} />
          </View>
          <View>
            <MyText textAlign='center' bold fontSize='XL'>Getting Set Up</MyText>
            <MyText textAlign='center' fontSize='small'>You can change these things later.</MyText>
          </View>
        </View>
        <MyButton width='85%' title='Next' onPress={ () => nav.navigate('Paywall')} />
      </View>
    </Page>
  )
}

export default Personalization

const styles = StyleSheet.create({
  con:{
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    width:"100%",
    paddingTop:"15%",
    paddingBottom:"12.5%"
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
  }
})

/**
 * Title: “Customize Your Experience”

Content:

Theme: Choose Light/Dark Mode.

Interests: Select preferred topics (Science, History, etc.).

Notifications: Opt-in for daily reminders.

CTA: “Save Preferences” to continue.
 */
