import { StyleSheet,  View } from 'react-native';
import React  from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import DigestPreview from '../../components/DigestPreview';
import { Divider } from '@rneui/base';
import Achievement from '../../components/Achievement';
import MyIcon from '../../components/MyIcon';
import { useNavigation } from '@react-navigation/native';
import { useSettingsStore } from '../../stores/useSettingStore';
import { Image } from 'react-native';


const Home = () => {
  const nav = useNavigation()
  const {navigationTheme} = useSettingsStore()
  return (
    <Page style={{alignItems:"flex-start", justifyContent:"flex-start",paddingBottom:"5%"}}>
      <View style={styles.topRow}>
      <MyText fontSize='XL' bold>Home</MyText>
      <MyIcon onPress={() => nav.navigate('Settings')} name='settings' size={30} />
      </View>
      <MyText style={{marginVertical:"2%"}} fontSize='small'>
        🔥 Current Streak: <MyText fontSize='small' bold>5</MyText> - Keep it up!
      </MyText>
      <DigestPreview 
      title='The Big Bang'  style={{marginTop:"3%",marginBottom:"8%"}}
      category='Science' topic='Astronomy' readingTime={3} date='April 7th, 2025'/>
      <MyText bold color='gray' fontSize='small'>Upcoming Achievements </MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2.5%"}} />
      <Achievement progress={0.9} title='Five for Five' desc='Logged in and learn for 5 days straight.'/>
      <Achievement progress={0.87} title='Top Ranker' desc='Reach the highest rank in the system. '/>
      <MyText bold style={{marginTop:"5%"}}  color='gray' fontSize='small'>Daily Trivia</MyText>
      <Divider color='gray' width={1} style={{width:"100%",alignSelf:"center", marginVertical:"2.5%"}} />
      <View style = {[styles.box]}>
        <View style = {[styles.icon,{
          backgroundColor:navigationTheme.colors.background,
          borderColor:navigationTheme.colors.primary
          }]}>
          <MyIcon color='primary' name='light-bulb' type='entypo' size={30} />
        </View>
        <MyText reversedColor fontSize='small' style={[styles.text,{backgroundColor:navigationTheme.colors.primary }]}>
          <MyText reversedColor fontSize='small' bold>Fun fact:
            </MyText> Humans have unique tongue prints, just like fingerprints
        </MyText>
      </View>
      <View style = {[styles.box]}>
        <View style = {[styles.icon,{
          backgroundColor:navigationTheme.colors.background,
          borderColor:navigationTheme.colors.primary
          }]}>
          <MyIcon color='primary' name='quote' type='entypo' size={30} />
        </View>
        <MyText reversedColor fontSize='small' style={[styles.text,{backgroundColor:navigationTheme.colors.primary }]}>
          <MyText reversedColor fontSize='small' bold>Quote of the day:
            </MyText> "This is the quote of the day" - Chikaosolu Nnadozie"
        </MyText>
      </View>z
      <View style = {styles.row}>
        <Image style={styles.img} resizeMode='contain' source={require('../../../assets/images/config/icon.png')} />
        <MyText 
        color='gray' fontSize='small'
        style = {{alignSelf:"center"}}>Keep on learning!</MyText>
      </View>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  topRow:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%"
  },
  box:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%",
    marginVertical:"2%",
  },
  icon:{
    alignItems: "center",
    justifyContent: "center",
    padding:'3%',
    borderWidth:3.4,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
  },
  text:{
    flex:1,
    padding:"3%",
    borderTopRightRadius:15,
    borderBottomRightRadius:15
  },
  img:{
    width:"7.5%",
    height:undefined,
    aspectRatio:1,
    borderRadius:10
  },
  row:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    marginTop:"7.5%",
    gap:"3%",
  }
})
