import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

type PageProps = {
    style?: ViewStyle,
    children?:React.ReactNode,
}

const Page = ({style, children}: PageProps) => {
  return (
    <View style={[styles.con, style]}>
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
