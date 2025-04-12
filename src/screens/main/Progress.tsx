import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import * as Progress from 'react-native-progress';
import { useSettingsStore } from '../../stores/useSettingStore';
import Achievement from '../../components/Achievement';
import { Divider } from '@rneui/base';
import { Tab } from '@rneui/themed';

const ProgressScreen = () => {
  const { navigationTheme } = useSettingsStore();
  const [activeTab, setActiveTab] = useState(0); 

  const achievementsInProgress = [
    { progress: 0.9, title: 'Five for Five', desc: 'Logged in and learn for 5 days straight.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
  ];
  

  const completedAchievements = [
    { progress: 1, title: 'First Steps', desc: 'Completed your first digest.' },
    { progress: 1, title: 'Daily Learner', desc: 'Logged in for 7 consecutive days.' },
    { progress: 1, title: 'Daily Learner', desc: 'Logged in for 7 consecutive days.' },
    { progress: 1, title: 'Daily Learner', desc: 'Logged in for 7 consecutive days.' },
    { progress: 1, title: 'Daily Learner', desc: 'Logged in for 7 consecutive days.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
  ];

  const renderAchievements = () => {
    const achievements = activeTab === 0 ? achievementsInProgress : completedAchievements;
    return achievements.map((achievement, index) => (
      <Achievement
        key={index}
        progress={achievement.progress}
        title={achievement.title}
        desc={achievement.desc}
      />
    ));
  };

  return (
    <Page  style={{ alignItems: 'flex-start', paddingBottom:'7.5%' }}>
      <MyText bold fontSize="XL">Progress</MyText>
      <MyText style={{ marginTop: '5%' }}>
        <MyText bold>Current Rank: </MyText>Novice
      </MyText>
      <Progress.Bar
        height={10}
        width={350}
        style={{ marginTop: '2.5%' }}
        progress={0.75}
        color={navigationTheme.colors.primary}
      />
      <View style = {{flexDirection:"row", alignItems:"center"}}>
        <MyText style={{ marginVertical: '2%' }} color="primary" fontSize="small">75% to Amateur:</MyText>
        <MyText onPress={() =>{}}   bold color="primary" fontSize="small"> tap to see all ranks</MyText>
      </View>
      <Tab 
        value={activeTab}
        onChange={(index) => setActiveTab(index)}
        indicatorStyle={{ backgroundColor: navigationTheme.colors.primary }}
      >
        <Tab.Item
          title="In Progress"
          titleStyle={{ color: activeTab === 0 ? navigationTheme.colors.primary : 'gray' }}
        />
        <Tab.Item
          title="Completed"
          titleStyle={{ color: activeTab === 1 ? navigationTheme.colors.primary : 'gray' }}
        />
      </Tab>
      <ScrollView contentContainerStyle={{ paddingVertical: '5%', paddingBottom:"5%", width:"100%"}}>
        {renderAchievements()}
      </ScrollView>
      <View style = {styles.box}>
        <MyText reversedColor bold fontSize='small'>Current Streak:
          <MyText reversedColor  fontSize='small'> 5 days</MyText>
        </MyText>
        <MyText reversedColor  bold fontSize='small'>Longest Streak:
          <MyText reversedColor  fontSize='small'> 12 days</MyText>
        </MyText>
        <MyText reversedColor  bold fontSize='small'>Date Jointed:
          <MyText reversedColor   fontSize='small'> April 2th, 2025 days</MyText>
        </MyText>
        <MyText reversedColor  bold fontSize='small'>Digests Completed:
          <MyText reversedColor  fontSize='small'> 7</MyText>
        </MyText>
        <MyText reversedColor  bold fontSize='small'>Reading Time:
          <MyText reversedColor  fontSize='small'> 1 hour 5 minutes</MyText>
        </MyText>
        <MyText reversedColor  bold fontSize='small'>Achievements:
          <MyText reversedColor  fontSize='small'> 5</MyText>
        </MyText>
      </View>
    </Page>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  box:{
    borderRadius:20,
    width:"100%",
    height:"30%",
    justifyContent:"center",
    gap:'5%',
    paddingHorizontal:"5%",
    backgroundColor:"#41AFEF",
    marginTop:"7.5%"
  }
});