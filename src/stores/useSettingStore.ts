import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { customDarkTheme, customLightTheme } from '../constants/Colors';  

type ThemeType = 'light' | 'dark' | 'system';

interface SettingsState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => Promise<void>;
  loadSettings: () => Promise<void>;
  navigationTheme: typeof customDarkTheme | typeof customLightTheme;
}

export const useSettingsStore = create<SettingsState>((set, get) => {
  const determineTheme = (theme: ThemeType) => {
    if (theme === 'system') {
      return Appearance.getColorScheme() === 'dark' ? customDarkTheme : customLightTheme;
    }
    return theme === 'dark' ? customDarkTheme : customLightTheme;
  };

  const updateNavigationBar = (theme: typeof customDarkTheme | typeof customLightTheme) => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(theme.colors.card);
      NavigationBar.setButtonStyleAsync(theme.dark ? 'light' : 'dark');
    }
  };

  return {
    theme: 'system', 
    navigationTheme: determineTheme('system'),

    setTheme: async (theme) => {
      await AsyncStorage.setItem('theme', theme);
      const newTheme = determineTheme(theme);
      set({ theme, navigationTheme: newTheme });
      updateNavigationBar(newTheme);
    },

    loadSettings: async () => {
      const storedTheme = (await AsyncStorage.getItem('theme')) as ThemeType | null;
      const theme = storedTheme || 'system'; 
      const newTheme = determineTheme(theme);
      set({ theme, navigationTheme: newTheme });
      updateNavigationBar(newTheme);
    },
  };
});

Appearance.addChangeListener(() => {
  const { theme, setTheme } = useSettingsStore.getState();
  if (theme === 'system') {
    setTheme('system');
  }
});
