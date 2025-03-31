import { StyleSheet, View, ViewStyle, ImageBackground } from 'react-native';
import React from 'react';
import { useSettingsStore } from '../stores/useSettingStore';

type PageProps = {
    style?: ViewStyle;
    children?: React.ReactNode;
    padding?: string;
    customBackground?: boolean;
};

const Page = ({ style, children, padding, customBackground }: PageProps) => {
    const {navigationTheme} = useSettingsStore()
    return customBackground ? (
        <ImageBackground
            source={ navigationTheme.dark ? require('../../assets/images/background-dark.png') :require('../../assets/images/background.png')}
            style={[styles.background, style,{ padding: padding ? Number(padding) : undefined, backgroundColor:navigationTheme.colors.background  }]} 
            resizeMode="repeat"
        >
            {children}
        </ImageBackground>
    ) : (
        <View style={[styles.con, style, { padding: padding ? Number(padding) : undefined, backgroundColor:navigationTheme.colors.background }]}>
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
