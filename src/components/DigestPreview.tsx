import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText';
import MyIcon from './MyIcon';

interface DigestPreviewProps {
  title:string;
  category:string;
  topic:string;
  readingTime:number;
  date:string;
}
const DigestPreview = ({title, topic, category, readingTime, date}: DigestPreviewProps) => {
  return (
    <ImageBackground imageStyle={styles.img} resizeMode='repeat' source={require('../../assets/images/background-digest.png')} style={styles.con}>
      <View style ={styles.content}>
          <View style={styles.topRow}>
            <View>
              <MyText reversedColor fontSize='large' bold>{title}</MyText>
              <MyText style={{marginVertical:"1%"}} reversedColor fontSize='small'>{category}: {topic}</MyText>
            </View>
            <MyIcon reversedColor onPress={() => console.log("Opening digest...")} name='play' type='antdesign' size={50} />
          </View>
          <View style = {styles.bottomRow}>
            <View style = {{flexDirection:"row", alignItems:"center",gap:"10%"}}>
              <MyIcon reversedColor  name='clockcircle' type='antdesign' size={15} />
              <MyText reversedColor fontSize='small'>{readingTime} min</MyText>
            </View>
            <MyText reversedColor fontSize='small' >{date}</MyText>
          </View>
      </View>
    </ImageBackground>
  )
}

export default DigestPreview

const styles = StyleSheet.create({
  con:{
    marginTop:"3%",
    marginBottom:'8%',
    borderRadius:15,
    width:"100%",
    height:"20%",
    justifyContent:"space-between",
    //borderWidth:1,
  },
  img:{
    width:"100%",
    height:"100%",
    alignSelf:"center",
    borderRadius:15,
  },
  content:{
    flex:1,
    justifyContent:"space-between",
    padding:"4%"
  },
  topRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  bottomRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  }
})


/**
 * 
 *    <View style={styles.topRow}>
        <View>
          <MyText fontSize='large' bold>{title}</MyText>
          <MyText fontSize='small'>Topic: {topic} ({category})</MyText>
        </View>
        <MyIcon onPress={() => console.log("Opening digest...")} name='play' type='antdesign' size={50} />
      </View>
      <View style = {styles.bottomRow}>
        <View style = {{flexDirection:"row", alignItems:"center",gap:"10%"}}>
          <MyIcon name='clockcircle' type='antdesign' size={15} />
          <MyText fontSize='small'>{readingTime} min</MyText>
        </View>
        <MyText fontSize='small' >{date}</MyText>
      </View>
 */