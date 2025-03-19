import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Icon, LinearProgress} from "@rneui/base"
import { useNavigation } from '@react-navigation/native';

interface ProgressBarProps{
    progress: number
    showBack?:boolean;
}

const ProgressBar = (props: ProgressBarProps) => {
  const [progress, setProgress] = useState(props.progress)
  return (
    <View style={styles.container}>
        {props.showBack && (
            <Icon onPress={useNavigation().goBack} name='chevron-back' type='ionicon' size={35} />
        )}
        <LinearProgress
            color='black'
            trackColor='gray'
            value={progress}
            variant='determinate'
            style={styles.progressBar}
        />      
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center"
    },
    progressBar:{
        width:"85%",
        height:7.5,
        borderRadius:100
    }
})