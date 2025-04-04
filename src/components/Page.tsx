import { StyleSheet, View, ViewStyle, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import { useSettingsStore } from '../stores/useSettingStore';

type PageProps = {
    style?: ViewStyle;
    children?: React.ReactNode;
    customBackground?: boolean;
    paddingHorizontal?: any;
    paddingVertical?: any;
    dontApplyPadding?: boolean;
};

const Page = ({ style, children, customBackground, paddingHorizontal = "5%", paddingVertical = "12.5%",dontApplyPadding }: PageProps) => {
    const { navigationTheme } = useSettingsStore();
    
    const paddingStyle = dontApplyPadding
    ? {}
    : {
        paddingHorizontal,
        paddingVertical,
      };

    const containerStyle = [
        {
        backgroundColor: navigationTheme.colors.background,
        },
        paddingStyle,
        style,
    ];

    return customBackground ? (
        <ImageBackground
            source={navigationTheme.dark ? require('../../assets/images/background-dark.png') : require('../../assets/images/background.png')}
            style={[styles.background, ...containerStyle]}
            resizeMode="repeat"
        >
            {children}
        </ImageBackground>
    ) : (
        <SafeAreaView style={[styles.con, ...containerStyle]}>
            {children}
        </SafeAreaView>
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
