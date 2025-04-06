import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useSettingsStore } from '../stores/useSettingStore'

interface MyIconProps {
  name: string;
  type?: string;
  size?: number;
  color?: string;
  reversedColor?: boolean;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

const MyIcon = (props: MyIconProps) => {
  const { navigationTheme } = useSettingsStore()

  const resolvedColor = props.color === 'primary'
    ? navigationTheme.colors.primary
    : props.color
      ? props.color
      : props.reversedColor
        ? navigationTheme.colors.card
        : navigationTheme.colors.text;

  return (
    <TouchableOpacity
      activeOpacity={props.onPress ? 0.5 : 1}
      onPress={props.onPress}
      style={props.containerStyle}
    >
      <Icon
        color={resolvedColor}
        name={props.name}
        size={props.size}
        type={props.type}
      />
    </TouchableOpacity>
  )
}

export default MyIcon

const styles = StyleSheet.create({})
