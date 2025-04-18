import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Achievements from '../constants/Achievements';
import Ranks from '../constants/Ranks';

interface UserState {
  loginStreak: number;
  longestStreak: number;
  rank: string;
  completedDigests: number;
  completedAchievements: string[];
  selectedTopics: string[];
  readingTime: number;
  dateJoined: string;
  setLoginStreak: (streak: number) => void;
  setLongestStreak: (streak: number) => void;
  setRank: (rank: string) => void;
  setCompletedDigests: (digests: number) => void;
  setCompletedAchievements: (achievements: string[]) => void;
  setSelectedTopics: (topics: string[]) => void;
  setReadingTime: (time: number) => void;
  setDateJoined: (date: string) => void;
  loadUserData: () => Promise<void>;
  saveUserData: () => Promise<void>;
  getAchievementProgress: (achievementTitle: string) => number;
  rankProgress: () => number;
  inProgressAchievements: () => string[];
}

const useUserStore = create<UserState>((set, get) => ({
  loginStreak: 0,
  longestStreak: 0,
  rank: 'Novice',
  completedDigests: 0,
  completedAchievements: [],
  selectedTopics: [],
  readingTime: 0,
  dateJoined: '',
  setLoginStreak: (streak: number) => {
    console.log('Setting loginStreak:', streak);
    set({ loginStreak: streak });
  },
  setLongestStreak: (streak: number) => {
    console.log('Setting longestStreak:', streak);
    set({ longestStreak: streak });
  },
  setRank: (rank: string) => {
    console.log('Setting rank:', rank);
    set({ rank });
  },
  setCompletedDigests: (digests: number) => {
    console.log('Setting completedDigests:', digests);
    set({ completedDigests: digests });
  },
  setCompletedAchievements: (achievements: string[]) => {
    console.log('Setting completedAchievements:', achievements);
    set({ completedAchievements: achievements });
  },
  setSelectedTopics: (topics: string[]) => {
    console.log('Setting selectedTopics:', topics);
    set({ selectedTopics: topics });
  },
  setReadingTime: (time: number) => {
    console.log('Setting readingTime:', time);
    set({ readingTime: time });
  },
  setDateJoined: (date: string) => {
    console.log('Setting dateJoined:', date);
    set({ dateJoined: date });
  },
  loadUserData: async () => {
    try {
      const loginStreak = await AsyncStorage.getItem('loginStreak');
      const longestStreak = await AsyncStorage.getItem('longestStreak');
      const rank = await AsyncStorage.getItem('rank');
      const completedDigests = await AsyncStorage.getItem('completedDigests');
      const completedAchievements = await AsyncStorage.getItem('completedAchievements');
      const selectedTopics = await AsyncStorage.getItem('selectedTopics');
      const readingTime = await AsyncStorage.getItem('readingTime');
      const dateJoined = await AsyncStorage.getItem('dateJoined');

      const parsedData = {
        loginStreak: loginStreak ? parseInt(loginStreak, 10) : 0,
        longestStreak: longestStreak ? parseInt(longestStreak, 10) : 0,
        rank: rank || 'Novice',
        completedDigests: completedDigests ? parseInt(completedDigests, 10) : 0,
        completedAchievements: completedAchievements ? JSON.parse(completedAchievements) : [],
        selectedTopics: selectedTopics ? JSON.parse(selectedTopics) : [],
        readingTime: readingTime ? parseInt(readingTime, 10) : 0,
        dateJoined: dateJoined || '',
      };

      console.log('Loaded user data:', parsedData);

      set(parsedData);
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  },
  saveUserData: async () => {
    try {
      const {
        loginStreak,
        longestStreak,
        rank,
        completedDigests,
        completedAchievements,
        selectedTopics,
        readingTime,
        dateJoined,
      } = get();

      console.log('Saving user data:', {
        loginStreak,
        longestStreak,
        rank,
        completedDigests,
        completedAchievements,
        selectedTopics,
        readingTime,
        dateJoined,
      });

      await AsyncStorage.setItem('loginStreak', loginStreak.toString());
      await AsyncStorage.setItem('longestStreak', longestStreak.toString());
      await AsyncStorage.setItem('rank', rank);
      await AsyncStorage.setItem('completedDigests', completedDigests.toString());
      await AsyncStorage.setItem('completedAchievements', JSON.stringify(completedAchievements));
      await AsyncStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));
      await AsyncStorage.setItem('readingTime', readingTime.toString());
      await AsyncStorage.setItem('dateJoined', dateJoined);
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  },
  getAchievementProgress: (achievementTitle: string) => {
    const { loginStreak, completedDigests, rank, selectedTopics, readingTime } = get();
    const achievement = Achievements.find((a) => a.title === achievementTitle);
    if (!achievement) return 0;

    switch (achievement.type) {
      case 'streak': {
        const requiredStreak = parseInt(achievement.desc.match(/\d+/)?.[0] || '0', 10);
        return Math.min(loginStreak / requiredStreak, 1);
      }
      case 'digests': {
        const requiredDigests = parseInt(achievement.desc.match(/\d+/)?.[0] || '0', 10);
        return Math.min(completedDigests / requiredDigests, 1);
      }
      case 'timeRead': {
        const requiredMinutes = parseInt(achievement.desc.match(/\d+/)?.[0] || '0', 10);
        return Math.min(readingTime / requiredMinutes, 1);
      }
      case 'timeOfDay': {
        const currentHour = new Date().getHours();
        if (achievement.title === 'Night Owl' && currentHour >= 0 && currentHour < 1) return 1;
        if (achievement.title === 'Early Bird' && currentHour >= 5 && currentHour < 7) return 1;
        return 0;
      }
      case 'rank': {
        const requiredRank = achievement.title.split(': ')[1];
        const currentRankIndex = Ranks.findIndex((r) => r.rank === rank);
        const requiredRankIndex = Ranks.findIndex((r) => r.rank === requiredRank);
        return currentRankIndex >= requiredRankIndex ? 1 : 0;
      }
      default:
        return 0;
    }
  },
  rankProgress: () => {
    const { rank, completedDigests } = get();
    const currentRankIndex = Ranks.findIndex((r) => r.rank === rank);
    const nextRank = Ranks[currentRankIndex + 1];
    if (!nextRank) return 1;
    const requiredDigests = nextRank.requiredDigests;
    return Math.min(completedDigests / requiredDigests, 1);
  },
  inProgressAchievements: () => {
    const { completedAchievements, getAchievementProgress } = get();
    const inProgress = Achievements.filter(
      (achievement) =>
        !completedAchievements.includes(achievement.title) &&
        getAchievementProgress(achievement.title) >= 0 &&
        getAchievementProgress(achievement.title) < 1
    ).map((achievement) => achievement.title);

    console.log('In-Progress Achievements:', inProgress);
    return inProgress;
  },
}));

export default useUserStore;