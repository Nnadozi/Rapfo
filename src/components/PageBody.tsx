import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

type PageBodyProps = {
    style?: ViewStyle,
    children?:React.ReactNode,
}

const PageBody = ({style, children}: PageBodyProps) => {
  return (
    <View style={[styles.con, style]}>
        {children}
    </View>
  )
}

export default PageBody

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
