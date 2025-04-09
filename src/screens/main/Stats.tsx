import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import * as Progress from 'react-native-progress';
import { useSettingsStore } from '../../stores/useSettingStore';
import Achievement from '../../components/Achievement';
import { Divider } from '@rneui/base';
import { Tab } from '@rneui/themed';

const Profile = () => {
  const { navigationTheme } = useSettingsStore();
  const [activeTab, setActiveTab] = useState(0); 

  const achievementsInProgress = [
    { progress: 0.9, title: 'Five for Five', desc: 'Logged in and learn for 5 days straight.' },
    { progress: 0.87, title: 'Top Ranker', desc: 'Reach the highest rank in the system.' },
  ];

  const completedAchievements = [
    { progress: 1, title: 'First Steps', desc: 'Completed your first digest.' },
    { progress: 1, title: 'Daily Learner', desc: 'Logged in for 7 consecutive days.' },
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
    <Page style={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingBottom: '5%' }}>
      <MyText bold fontSize="XL">Statistics</MyText>
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
      <MyText style={{ marginVertical: '1.5%' }} color="primary" fontSize="small">
        75% to Amateur:<MyText bold color="primary" fontSize="small"> tap to see all ranks</MyText>
      </MyText>
      <MyText style={{ marginTop: '7.5%' }} bold color="gray" fontSize="small">All Achievements</MyText>
      <Divider color="gray" width={1} style={{ width: '100%', alignSelf: 'center', marginVertical: '2.5%' }} />
      <Tab
        value={activeTab}
        onChange={(index) => setActiveTab(index)}
        indicatorStyle={{ backgroundColor: navigationTheme.colors.primary, height: 3 }}
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
      <View style={{ marginTop: '5%' }}>
        {renderAchievements()}
      </View>
    </Page>
  );
};

export default Profile;

const styles = StyleSheet.create({});