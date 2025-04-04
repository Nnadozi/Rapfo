import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useSettingsStore } from '../stores/useSettingStore';

interface MyIconProps {
    name:string;
    type?:string;
    size?:number
    color?:string
    containerStyle?:ViewStyle;
    onPress ? : () => void;
}
const MyIcon = (props: MyIconProps) => {
  const {navigationTheme} = useSettingsStore()
  return (
    <TouchableOpacity activeOpacity={props.onPress ? 0.5 : 100} onPress={props.onPress} style={props.containerStyle}>
      <Icon 
      color={props.color ? props.color : navigationTheme.colors.text}
      name={props.name}
      size={props.size}
      type={props.type}
      />
    </TouchableOpacity>
  )
}

export default MyIcon

const styles = StyleSheet.create({})