
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import OnboardNav from './src/nav/OnboardNav';
import MainNav from './src/nav/MainNav';

SplashScreen.preventAutoHideAsync();

export default function App() {

const [loaded, error] = useFonts({
  "Figtree-Regular": require("./assets/fonts/Figtree-Regular.ttf"),
  "Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf")
});

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding' component={OnboardNav} />
        <Stack.Screen name='Main' component={MainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

