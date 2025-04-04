import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Stats from '../screens/main/Stats';
import History from '../screens/main/History';
import { Icon } from '@rneui/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/main/Settings';

const MainTabs = () =>{
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Tabs.Screen name="History" component={History} options={{
          tabBarIcon: ({focused}) => <Icon  name='history' color={focused ? "#41AFEF" : 'lightgray'} />,
          tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
        <Tabs.Screen name="Home" component={Home} options={{
           tabBarIcon: ({focused}) => <Icon name='home' color={focused ? "#41AFEF" : 'lightgray'}  />,
           tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
        <Tabs.Screen name="Stats" component={Stats}  options={{
           tabBarIcon: ({focused}) => <Icon size={18} name='stats-chart' color={focused ? "#41AFEF" : 'lightgray'} type='ionicon'  />,
           tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
    </Tabs.Navigator>
  )
}

const MainNav = () =>{
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen  name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}


export default MainNav

const styles = StyleSheet.create({})