import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import { ViewStyle } from 'react-native';
import { useSettingsStore } from '../stores/useSettingStore';


interface MyButtonProps {
  title:string;
  onPress: () => void;
  width?:string;
  style?: ViewStyle;
}

const MyButton = ({title, onPress, width, style}: MyButtonProps) => {
  const {navigationTheme} = useSettingsStore()
  return (
    <Button
      title={title}
      onPress={onPress}
      containerStyle={[{width:width, borderRadius:50},style]}
      titleStyle={{fontFamily:'Figtree-Bold'}}
      size='lg'
      color={navigationTheme.colors.primary}
    />
  )
}

export default MyButton

const styles = StyleSheet.create({})