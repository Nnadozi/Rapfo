import { StyleSheet, View, ScrollView, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import Page from '../../components/Page'
import MyText from '../../components/MyText'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'

const topics = [
  'Science', 'History', 'Technology', 'Health', 'Business', 'Psychology',  'Philosophy', 
  'Art & Culture', 'Literature', 'Space'
];

const Personalization = () => {
  const nav = useNavigation();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <Page customBackground> 
      <View style={styles.con}>
        
        <View style={styles.topRow}>
          <View style={styles.icon}>
            <Icon size={25} name='chevron-back-outline' type='ionicon' onPress={nav.goBack} />
          </View>
          <View>
            <MyText textAlign='center' bold fontSize='XL'>Getting Set Up</MyText>
            <MyText textAlign='center' fontSize='small'>You can change these things later.</MyText>
          </View>
        </View>

        <ScrollView style={{width:"100%", paddingHorizontal:"5%"}} contentContainerStyle={styles.mainCon}>
          <View style={styles.heading}>
            <Icon name='bulb-outline' type='ionicon' color='#ff9800' size={24} />
            <MyText color='white' bold>Choose A Topic!</MyText>
          </View>
          <MyText fontSize="small">Select topics that interest you:</MyText>
          <View style={styles.topicContainer}>
            {topics.map((topic) => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={topic} 
                style={[styles.topicButton, selectedTopics.includes(topic) && styles.selectedTopic]} 
                onPress={() => toggleTopic(topic)}
              >
                <MyText fontSize='small' color={selectedTopics.includes(topic) ? 'white' : 'black'}>{topic}</MyText>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.heading}>
            <Icon name='color-palette-outline' type='ionicon' color='#673ab7' size={24} />
            <MyText color='white' bold>Choose App Theme</MyText>
          </View>
          <View style={styles.optionRow}>
            <MyText fontSize="small">Dark Mode</MyText>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>

          <View style={styles.heading}>
            <Icon name='notifications-outline' type='ionicon' color='#4caf50' size={24} />
            <MyText color='white' bold>Enable Reminder Notifications</MyText>
          </View>
          <View style={styles.optionRow}>
            <MyText fontSize="small">Receive Daily Reminders</MyText>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>

        </ScrollView>

        <MyButton width='85%' title='Next' onPress={() => nav.navigate('Paywall')} />    
      </View>
    </Page>
  )
}

export default Personalization

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%",
    paddingTop: "12.5%",
    paddingBottom: "10%",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  icon: {
    position: 'absolute',
    left: "5%",
  },
  mainCon: {
    flexGrow: 1,
    marginVertical: "5%",
  },
  heading: {
    backgroundColor: "#41AFEF",
    marginVertical: "3%",
    padding: "3%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: "3%",
  },
  topicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical:"5%",
    gap:10,
  },
  topicButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    padding:"3%"
  },
  selectedTopic: {
    backgroundColor: "#41AFEF",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "3%",
    borderRadius: 20,
    marginVertical: "3%",
  }
})
