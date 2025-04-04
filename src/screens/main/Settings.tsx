import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import { useSettingsStore } from '../../stores/useSettingStore'
import MyButton from '../../components/MyButton'
import SettingsHeader from '../../components/SettingsHeader'
import { ButtonGroup } from '@rneui/base'

const Settings = () => {
  const { theme, setTheme } = useSettingsStore();
  const themeOptions = ['Light', 'Dark', 'System'];
  const [selectedIndex, setSelectedIndex] = useState(() => {
    switch (theme) {
      case 'light':
        return 0;
      case 'dark':
        return 1;
      case 'system':
      default:
        return 2;
    }
  });
  const handleThemeChange = (index: number) => {
    setSelectedIndex(index);
    const selectedTheme = themeOptions[index].toLowerCase();
    setTheme(selectedTheme);
  };

  return (
    <Page style={{alignItems:"flex-start", justifyContent:"flex-start",paddingBottom:"5%"}}>
      <MyText fontSize='XL' bold>Settings</MyText>
      <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:"flex-start"}} >
      <SettingsHeader title="Theme" iconName="sun" iconType="feather">
        <ButtonGroup
          buttons={themeOptions}
          selectedIndex={selectedIndex}
          onPress={handleThemeChange}
          containerStyle={{ marginTop:"4%",marginBottom:"-2%"}}
        />
      </SettingsHeader>
      <SettingsHeader title="Language" iconName="language" />
      <SettingsHeader title="Notifications" iconName="notifications" />
      <SettingsHeader title="Restore Purchases" iconName="restore" />
      <SettingsHeader title="Feedback" iconName="feedback" />
      <SettingsHeader title="Terms of Service" iconName="information-circle" iconType='ionicon' />
      <SettingsHeader title="Privacy Policy" iconName="privacy-tip"/>
      <SettingsHeader title="Support" iconName="support" />
      <SettingsHeader title="Version" iconName="hash" iconType='feather' />
      </ScrollView> 
    </Page>
  )
}

export default Settings

const styles = StyleSheet.create({})