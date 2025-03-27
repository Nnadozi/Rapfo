import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import { ViewStyle } from 'react-native';


interface MyButtonProps {
  title:string;
  onPress: () => void;
  width?:string;
  style?: ViewStyle;
}

const MyButton = ({title, onPress, width, style}: MyButtonProps) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      containerStyle={[{width:width, borderRadius:50},style]}
      titleStyle={{fontFamily:'Figtree-Bold'}}
      size='lg'
    />
  )
}

export default MyButton

const styles = StyleSheet.create({})