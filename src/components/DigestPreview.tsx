import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText';
import MyIcon from './MyIcon';

interface DigestPreviewProps {
  title:string;
  category:string;
  readingTime:number;
  date:string;
}
const DigestPreview = ({title, category, readingTime, date}: DigestPreviewProps) => {
  return (
    <View style={styles.con}>
      <View style={styles.topRow}>
        <View>
          <MyText fontSize='large'>{title}</MyText>
          <MyText fontSize='small'>Category: {category}</MyText>
        </View>
        <MyIcon onPress={() => console.log("Opening digest...")} name='play' type='antdesign' size={50} />
      </View>
      <View style = {styles.bottomRow}>
        <MyText fontSize='small'>{readingTime} min</MyText>
        <MyText fontSize='small' >{date}</MyText>
      </View>
    </View>
  )
}

export default DigestPreview

const styles = StyleSheet.create({
  con:{
    borderWidth:1,
    width:"100%",
    height:"20%",
    borderRadius:10,
    marginTop:"3%",
    marginBottom:'10%',
    padding:"4%",
    justifyContent:"space-between",
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