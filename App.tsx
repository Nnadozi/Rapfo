import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { useSettingsStore } from './src/stores/useSettingStore';
import OnboardNav from './src/nav/OnboardNav';
import MainNav from './src/nav/MainNav';
import AuthNav from './src/nav/AuthNav';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();
  const { loadSettings, navigationTheme } = useSettingsStore();

  const [loaded, error] = useFonts({
    "Figtree-Regular": require("./assets/fonts/Figtree-Regular.ttf"),
    "Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf")
  });

  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style={navigationTheme.dark ? 'light' : 'dark'} />
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Onboarding' component={OnboardNav} />
          <Stack.Screen name='Authentication' component={AuthNav} />
          <Stack.Screen name='Main' component={MainNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
