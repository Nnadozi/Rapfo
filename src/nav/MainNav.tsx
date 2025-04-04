import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Stats from '../screens/main/Stats';
import History from '../screens/main/History';
import { Icon } from '@rneui/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/main/Settings';

const MainNav = () =>{
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{headerShown:false}}>
        <Tabs.Screen name="History" component={History} options={{
          tabBarIcon: ({focused}) => <Icon  name='history' color={focused ? "#41AFEF" : 'lightgray'} />,
          tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
        <Tabs.Screen name="Home" component={Home} options={{
           tabBarIcon: ({focused}) => <Icon name='home' color={focused ? "#41AFEF" : 'lightgray'}  />,
           tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
        <Tabs.Screen name="Stats" component={Stats}  options={{
           tabBarIcon: ({focused}) => <Icon name='stats-chart' color={focused ? "#41AFEF" : 'lightgray'} type='ionicon'  />,
           tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
        <Tabs.Screen name="Settings" component={Settings}  options={{
           tabBarIcon: ({focused}) => <Icon name='settings' color={focused ? "#41AFEF" : 'lightgray'} type='ionicon'  />,
           tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
    </Tabs.Navigator>
  )
}


export default MainNav

const styles = StyleSheet.create({})