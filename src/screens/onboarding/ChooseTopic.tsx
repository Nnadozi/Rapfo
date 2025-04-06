import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import OnboardingPage from '../../components/OnboardingPage';
import MyText from '../../components/MyText';
import MyIcon from '../../components/MyIcon';
import Topics from '../../constants/Topics';
import { Chip } from '@rneui/base';
import { useSettingsStore } from '../../stores/useSettingStore';

const categoryDetails = {
  Science: {
    icon: 'planet',
    subtitle: 'Explore the wonders of the universe and life.',
  },
  Math: {
    icon: 'calculator',
    subtitle: 'Unlock the secrets of numbers.',
  },
  History: {
    icon: 'book',
    subtitle: 'Dive into the past.',
  },
  Geography: {
    icon: 'earth',
    subtitle: 'Understand landscapes and cultures.',
  },
  Literature: {
    icon: 'library',
    subtitle: 'Read cool stories.',
  },
  Technology: {
    icon: 'laptop-outline',
    subtitle: 'Discover the latest advancements in tech.',
  },
};

interface Topic {
  category: string;
  topics: string[];
}

interface SelectedOptions {
  [key: string]: string[];
}

const ChooseTopic = () => {
  const { navigationTheme } = useSettingsStore();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    Science: [],
    Math: [],
    History: [],
    Geography: [],
    Literature: [],
    Technology: [],
  });

  const renderChips = (index: number) => {
    return (
      <View style={styles.chipContainer}>
        {Topics[index].topics.map((option) => (
          <Chip
            key={option}
            title={option}
            onPress={() => handleChipPress(Topics[index].category, option)}
            buttonStyle={{
              backgroundColor: selectedOptions[Topics[index].category].includes(option)
                ? navigationTheme.colors.primary
                : undefined,
              borderWidth: 1,
              borderColor: selectedOptions[Topics[index].category].includes(option)
                ? navigationTheme.colors.primary
                : "gray",
            }}
            titleStyle={{
              color: selectedOptions[Topics[index].category].includes(option)
                ? navigationTheme.colors.card
                : "gray",
              fontSize:13
            }}
          />
        ))}
      </View>
    );
  };

  const handleChipPress = (category: string, option: string) => {
    setSelectedOptions((prev) => {
      const isSelected = prev[category].includes(option);
      const updatedTopics = isSelected
        ? prev[category].filter((item) => item !== option)
        : [...prev[category], option];

      return {
        ...prev,
        [category]: updatedTopics,
      };
    });
  };

  return (
    <OnboardingPage
      title="Choose Topics"
      subTitle="What interests you?"
      progress={0.4}
      nextScreen="ChooseTheme"
    >
      <View style={styles.con}>
        <ScrollView contentContainerStyle={{ width:"100%", padding:"5%"}}>
          {Topics.map((topic, index) => {
            const categoryDetail = categoryDetails[topic.category];
            return (
              <View key={topic.category}>
                <View style={styles.header}>
                  <MyIcon name={categoryDetail.icon} type="ionicon" />
                  <View>
                    <MyText bold>{topic.category}</MyText>
                    <MyText style={{marginVertical:"1%"}}  fontSize="small">{categoryDetail.subtitle}</MyText>
                  </View>
                </View>
                {renderChips(index)}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </OnboardingPage>
  );
};

export default ChooseTopic;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    height: '100%',
    paddingVertical:"2%"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4%',
    marginVertical: '4%',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: '3%',
  },
});
