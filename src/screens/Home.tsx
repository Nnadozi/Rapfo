import { StyleSheet } from 'react-native';
import React from 'react';
import Page from '../components/Page';
import MyText from '../components/MyText';

//#3d8af5

const Home = () => {
  return (
    <Page>
      <MyText fontSize='small'>Small</MyText>
      <MyText fontSize='medium'>Medium</MyText>
      <MyText fontSize='large'>Large</MyText>
      <MyText fontSize='XL'>XL</MyText>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({})
