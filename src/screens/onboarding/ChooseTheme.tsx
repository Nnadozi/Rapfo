import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import OnboardingPage from '../../components/OnboardingPage';
import MyText from '../../components/MyText';
import { useSettingsStore } from '../../stores/useSettingStore';
import MyIcon from '../../components/MyIcon';

const ChooseTheme = () => {
  const { setTheme, navigationTheme, theme } = useSettingsStore(); // Access the current theme

  return (
    <OnboardingPage
      title="Pick Your Theme"
      subTitle="You can change this later"
      progress={0.6}
      nextScreen={'EnableNotifications'}
    >
      <View style={styles.con}>
        <TouchableOpacity
          onPress={() => setTheme('light')}
          style={[styles.box, { 
            borderColor: theme === 'light' ? navigationTheme.colors.primary:navigationTheme.colors.text,
            backgroundColor: theme === 'light' ? navigationTheme.colors.primary:undefined
          }]}
        >
          <MyIcon color={theme === 'light' ? navigationTheme.colors.card : navigationTheme.colors.text}  name='sunny-outline' type='ionicon' size={100} />
          <MyText color={theme === 'light' ? navigationTheme.colors.card : navigationTheme.colors.text}  bold>
            Light {theme === 'light' && '(Selected)'}
          </MyText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTheme('dark')}
          style={[styles.box, { 
            borderColor: theme === 'dark' ? navigationTheme.colors.primary:navigationTheme.colors.text,
            backgroundColor: theme === 'dark' ? navigationTheme.colors.primary:undefined
          }]}
        >
          <MyIcon color={theme === 'dark' ? navigationTheme.colors.card : navigationTheme.colors.text} name='sunny' type='ionicon'  size={100} />
          <MyText color={theme === 'dark' ? navigationTheme.colors.card : navigationTheme.colors.text} bold>
            Dark {theme === 'dark' && '(Selected)'}
          </MyText>
        </TouchableOpacity>
      </View>
    </OnboardingPage>
  );
};

export default ChooseTheme;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '40%',
    gap:"10%"
  },
});