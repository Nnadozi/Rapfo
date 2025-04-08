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
  type?: 'solid' | 'clear' | 'outline';
  iconName?:string;
  iconType?:string;
  size?: 'sm' | 'md' | 'lg';
}

const MyButton = ({title, onPress, width, style, type = "solid", iconName, iconType, size}: MyButtonProps) => {
  const {navigationTheme} = useSettingsStore()
  return (
    <Button
      icon = { iconName ? {name:iconName, type:iconType, color:navigationTheme.colors.background} : undefined} 
      iconContainerStyle = {{marginHorizontal:"3%"}}
      title={title}
      onPress={onPress}
      containerStyle={[{width:width,},style,type === "outline" ? styles.outlineStyle : null]}
      radius={50}
      titleStyle={{fontFamily:'Figtree-Bold', color: type !== 'solid' ? navigationTheme.colors.primary : navigationTheme.colors.background}}
      size={size || 'lg'}
      color={navigationTheme.colors.primary}
      type={type ? type : 'solid'}
    />
  )
}

export default MyButton

const styles = StyleSheet.create({
  outlineStyle:{
    borderWidth:1,
    borderColor:"#41AFEF"
  }
})