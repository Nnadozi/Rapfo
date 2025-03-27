import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Profile from '../screens/main/Profile';
import History from '../screens/main/History';
import { Icon } from '@rneui/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/main/Favorites';

const MainTabs = () =>{
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
        <Tabs.Screen name="Profile" component={Profile}  options={{
           tabBarIcon: ({focused}) => <Icon name='user' color={focused ? "#41AFEF" : 'lightgray'}  type='antdesign' />,
           tabBarActiveTintColor:"#41AFEF",tabBarInactiveTintColor:'lightgray'
        }} />
    </Tabs.Navigator>
  )
}

const MainNav = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='MainTabs' component={MainTabs} />
      <Stack.Screen name='Favorites' component={Favorites} />
    </Stack.Navigator>
  )
}

export default MainNav

const styles = StyleSheet.create({})