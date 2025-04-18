import { StyleSheet, View, Modal, ScrollView } from 'react-native';
import React from 'react';
import MyText from './MyText';
import Ranks from '../constants/Ranks';
import { useSettingsStore } from '../stores/useSettingStore';

const RanksOverlay = ({ onClose }: { onClose: () => void }) => {
  const {navigationTheme} = useSettingsStore()
  return (
    <Modal transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <MyText bold fontSize="XL" style={{marginBottom:"5%"}}>All Ranks</MyText>
          <ScrollView contentContainerStyle={{width: '100%', paddingVertical: "1%",}}>
            {Ranks.map((rank, index) => (
              <View key={index} style={[styles.rankItem,{borderColor:navigationTheme.colors.border}]}>
                <MyText bold fontSize="medium">{rank.rank}</MyText>
                <MyText fontSize="small">{rank.desc}</MyText>
                <MyText bold fontSize="small">Required Digests: {rank.requiredDigests}</MyText>
              </View>
            ))}
          </ScrollView>
          <MyText
            onPress={onClose}
            bold
            color="primary"
            fontSize="medium"
            style={styles.closeButton}
          >
            Close
          </MyText>
        </View>
      </View>
    </Modal>
  );
};

export default RanksOverlay;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  container: {
    width: '90%',
    height:"80%",
    backgroundColor: 'white',
    padding:"5%",
    alignItems: 'center',
    borderRadius: 10,
  },
  rankItem: {
    marginBottom: "5%",
    borderBottomWidth: 1,
    paddingBottom: "3%",
    gap:10
  },
  closeButton: {
    marginTop: 20,
  },
});