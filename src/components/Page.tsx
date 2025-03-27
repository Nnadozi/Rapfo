import { StyleSheet, View, ViewStyle, ImageBackground } from 'react-native'
import React, { ReactNode } from 'react'

type PageProps = {
    style?: ViewStyle,
    children?: React.ReactNode,
    padding?: string;
    customBackground?: boolean;  
}

const Page = ({style, children, padding, customBackground}: PageProps) => {
  return (
    <View style={[styles.con, style, {padding: padding ? parseInt(padding, 10) : undefined}]}>
        {customBackground ? (
            <ImageBackground 
                source={require('../../assets/images/background.png')} 
                style={styles.background}
                resizeMode='repeat'
            >
                {children}
            </ImageBackground>
        ) : (
            children 
        )}
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
    }
})
