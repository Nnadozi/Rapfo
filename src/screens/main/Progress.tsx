import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Page from '../../components/Page';
import MyText from '../../components/MyText';
import * as Progress from 'react-native-progress';
import { useSettingsStore } from '../../stores/useSettingStore';
import Achievement from '../../components/Achievement';
import { Tab } from '@rneui/themed';
import useUserStore from '../../stores/useUserStore';
import Achievements from '../../constants/Achievements';
import Ranks from '../../constants/Ranks';
import RanksOverlay from '../../components/RanksOverlay';

const ProgressScreen = () => {
  const { navigationTheme } = useSettingsStore();
  const {
    rank,
    loginStreak,
    completedAchievements,
    inProgressAchievements,
    completedDigests,
    readingTime,
    rankProgress,
    getAchievementProgress,
    dateJoined,
    longestStreak,
  } = useUserStore();
  const [activeTab, setActiveTab] = useState(0);
  const [isRanksOverlayVisible, setRanksOverlayVisible] = useState(false);

  const renderAchievements = () => {
    if (activeTab === 0) {
      if (inProgressAchievements().length === 0) {
        return <MyText fontSize="biggerSmall">No achievements in progress.</MyText>;
      }
      return inProgressAchievements().map((achievementTitle: string, index: React.Key | null | undefined) => (
        <Achievement
          key={index}
          progress={getAchievementProgress(achievementTitle)}
          title={achievementTitle}
          desc={Achievements.find((a) => a.title === achievementTitle)?.desc || ''}
        />
      ));
    } else {
      if (completedAchievements.length === 0) {
        return <MyText fontSize="biggerSmall">No completed achievements yet.</MyText>;
      }
      return completedAchievements.map((achievementTitle, index) => (
        <Achievement
          key={index}
          progress={1}
          title={achievementTitle}
          desc={Achievements.find((a) => a.title === achievementTitle)?.desc || ''}
        />
      ));
    }
  };

  return (
    <Page style={{ alignItems: 'flex-start', paddingBottom: '7.5%' }}>
      <MyText bold fontSize="XL">Progress</MyText>
      <MyText style={{ marginTop: '5%' }}>
        <MyText bold>Current Rank: </MyText>{rank}
      </MyText>
      <Progress.Bar
        height={10}
        width={350}
        style={{ marginTop: '2.5%' }}
        progress={rankProgress()}
        color={navigationTheme.colors.primary}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MyText style={{ marginVertical: '2%' }} color="primary" fontSize="small">
          {Math.round(rankProgress() * 100)}% to {Ranks[Ranks.findIndex((r) => r.rank === rank) + 1]?.rank || 'Max Rank'}.
        </MyText>
        <MyText
          onPress={() => setRanksOverlayVisible(true)}
          bold
          color="primary"
          fontSize="small"
        >
          tap to see all ranks
        </MyText>
      </View>
      <Tab
        value={activeTab}
        onChange={(index) => setActiveTab(index)}
        indicatorStyle={{ backgroundColor: navigationTheme.colors.primary }}
      >
        <Tab.Item
          title={`In Progress (${inProgressAchievements().length})`}
          titleStyle={{ color: activeTab === 0 ? navigationTheme.colors.primary : 'gray' }}
        />
        <Tab.Item
          title={`Completed (${completedAchievements.length})`}
          titleStyle={{ color: activeTab === 1 ? navigationTheme.colors.primary : 'gray' }}
        />
      </Tab>
      <ScrollView contentContainerStyle={{ paddingVertical: '5%', paddingBottom: '5%', width: '100%' }}>
        {renderAchievements()}
      </ScrollView>
      <View style={styles.box}>
        <MyText reversedColor bold fontSize="small">Current Streak:
          <MyText reversedColor fontSize="small"> {loginStreak} days</MyText>
        </MyText>
        <MyText reversedColor bold fontSize="small">Longest Streak:
          <MyText reversedColor fontSize="small"> {longestStreak} days</MyText>
        </MyText>
        <MyText reversedColor bold fontSize="small">Digests Completed:
          <MyText reversedColor fontSize="small"> {completedDigests}</MyText>
        </MyText>
        <MyText reversedColor bold fontSize="small">Reading Time:
          <MyText reversedColor fontSize="small"> {Math.floor(readingTime / 60)} hours {readingTime % 60} minutes</MyText>
        </MyText>
        <MyText reversedColor bold fontSize="small">Achievements:
          <MyText reversedColor fontSize="small"> {completedAchievements.length}</MyText>
        </MyText>
        <MyText reversedColor bold fontSize="small">Date Joined:
          <MyText reversedColor fontSize="small"> {dateJoined}</MyText>
        </MyText>
      </View>
      {isRanksOverlayVisible && (
        <RanksOverlay onClose={() => setRanksOverlayVisible(false)} />
      )}
    </Page>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  box: {
    borderRadius: 20,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    gap: '5%',
    paddingHorizontal: '5%',
    backgroundColor: '#41AFEF',
    marginTop: '7.5%',
  },
});