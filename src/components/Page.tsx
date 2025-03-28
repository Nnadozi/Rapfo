import { StyleSheet, View, ViewStyle, ImageBackground } from 'react-native';
import React from 'react';

type PageProps = {
    style?: ViewStyle;
    children?: React.ReactNode;
    padding?: string;
    customBackground?: boolean;
};

const Page = ({ style, children, padding, customBackground }: PageProps) => {
    return customBackground ? (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={[styles.background, style,{ padding: padding ? Number(padding) : undefined }]} 
            resizeMode="repeat"
        >
            {children}
        </ImageBackground>
    ) : (
        <View style={[styles.con, style, { padding: padding ? Number(padding) : undefined }]}>
            {children}
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});
