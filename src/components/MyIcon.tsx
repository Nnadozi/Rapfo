import { StyleSheet, Text, View, ViewStyle } from 'react-native'
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
    <Icon 
    containerStyle = {props.containerStyle}
    color={props.color ? props.color : navigationTheme.colors.text}
    name={props.name}
    size={props.size}
    type={props.type}
    onPress={props.onPress}
     />
  )
}

export default MyIcon

const styles = StyleSheet.create({})