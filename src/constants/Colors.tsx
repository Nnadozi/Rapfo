import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#41AFEF',
  },
};

export const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#41AFEF', 
  },
};
