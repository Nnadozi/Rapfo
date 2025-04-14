import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  loginStreak: number;
  rank: string;
  completedAchievements: string[];
  inProgressAchievements: string[];
  selectedTopics: string[];
  setLoginStreak: (streak: number) => void;
  setRank: (rank: string) => void;
  setCompletedAchievements: (achievements: string[]) => void;
  setInProgressAchievements: (achievements: string[]) => void;
  setSelectedTopics: (topics: string[]) => void;
  loadUserData: () => Promise<void>;
  saveUserData: () => Promise<void>;
}

const useUserStore = create<UserState>((set, get) => ({
  loginStreak: 0,
  rank: 'Novice',
  completedAchievements: [],
  inProgressAchievements: [],
  selectedTopics: [],
  setLoginStreak: (streak: number) => {
    console.log('Setting loginStreak:', streak);
    set({ loginStreak: streak });
  },
  setRank: (rank: string) => {
    console.log('Setting rank:', rank);
    set({ rank });
  },
  setCompletedAchievements: (achievements: string[]) => {
    console.log('Setting completedAchievements:', achievements);
    set({ completedAchievements: achievements });
  },
  setInProgressAchievements: (achievements: string[]) => {
    console.log('Setting inProgressAchievements:', achievements);
    set({ inProgressAchievements: achievements });
  },
  setSelectedTopics: (topics: string[]) => {
    console.log('Setting selectedTopics:', topics);
    set({ selectedTopics: topics });
  },
  loadUserData: async () => {
    try {
      const loginStreak = await AsyncStorage.getItem('loginStreak');
      const rank = await AsyncStorage.getItem('rank');
      const completedAchievements = await AsyncStorage.getItem('completedAchievements');
      const inProgressAchievements = await AsyncStorage.getItem('inProgressAchievements');
      const selectedTopics = await AsyncStorage.getItem('selectedTopics');

      const parsedData = {
        loginStreak: loginStreak ? parseInt(loginStreak, 10) : 0,
        rank: rank || 'Novice',
        completedAchievements: completedAchievements ? JSON.parse(completedAchievements) : [],
        inProgressAchievements: inProgressAchievements ? JSON.parse(inProgressAchievements) : [],
        selectedTopics: selectedTopics ? JSON.parse(selectedTopics) : [],
      };

      console.log('Loaded user data:', parsedData);

      set(parsedData);
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  },
  saveUserData: async () => {
    try {
      const { loginStreak, rank, completedAchievements, inProgressAchievements, selectedTopics } = get();
      console.log('Saving user data:', {
        loginStreak,
        rank,
        completedAchievements,
        inProgressAchievements,
        selectedTopics,
      });

      await AsyncStorage.setItem('loginStreak', loginStreak.toString());
      await AsyncStorage.setItem('rank', rank);
      await AsyncStorage.setItem('completedAchievements', JSON.stringify(completedAchievements));
      await AsyncStorage.setItem('inProgressAchievements', JSON.stringify(inProgressAchievements));
      await AsyncStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  },
}));

export default useUserStore;