import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

type PageProps = {
    style?: ViewStyle,
    children?:React.ReactNode,
    padding?:string;
}

const Page = ({style, children, padding}: PageProps) => {
  return (
    <View style={[styles.con, style,{padding: padding ? padding : undefined }]}>
        {children}
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
