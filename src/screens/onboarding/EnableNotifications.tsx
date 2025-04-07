import { Platform, StyleSheet } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import OnboardingPage from '../../components/OnboardingPage'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import MyIcon from '../../components/MyIcon';
import MyText from '../../components/MyText';

const EnableNotifications = () => {
  return (
    <OnboardingPage 
      title='Enable Notifications' 
      subTitle='So you never miss a daily gist.'
      progress={0.8}
      nextScreen={'Paywall'}
    >
      <MyIcon size={100} name='notifications' type='ionicon' onPress={() => console.log(3)}/>
      <MyText style={{marginVertical:"3%"}} bold>Tap to enable</MyText>
    </OnboardingPage>
  )
}

export default EnableNotifications

const styles = StyleSheet.create({})
