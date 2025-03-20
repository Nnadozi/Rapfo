import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

interface MyButtonProps {
  title:string;
  onPress: () => void;
}

const MyButton = ({title, onPress}: MyButtonProps) => {
  return (
    <Button 
      title={title}
      onPress={onPress}
    />
  )
}

export default MyButton

const styles = StyleSheet.create({})