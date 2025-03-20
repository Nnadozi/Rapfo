import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Profile from '../screens/main/Profile';
import History from '../screens/main/History';
import { Icon } from '@rneui/base';

const MainNav = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{headerShown:false}}>
        <Tabs.Screen name="History" component={History} options={{
          tabBarIcon: () => <Icon name='history' />
        }} />
        <Tabs.Screen name="Home" component={Home} options={{
           tabBarIcon: () => <Icon name='home' />
        }} />
        <Tabs.Screen name="Profile" component={Profile}  options={{
           tabBarIcon: () => <Icon name='user' type='antdesign' />
        }} />
    </Tabs.Navigator>
  )
}

export default MainNav

const styles = StyleSheet.create({})