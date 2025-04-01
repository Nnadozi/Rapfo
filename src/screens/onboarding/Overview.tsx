import { StyleSheet } from 'react-native'
import React from 'react'
import OnboardingPage from '../../components/OnboardingPage'

const Overview = () => {
  return (
    <OnboardingPage 
    title='How It Works' 
    subTitle='A simple breakdown'
    progress={20}
    nextScreen={'ChooseTopic'}
    />
  )
}

export default Overview

const styles = StyleSheet.create({
  con:{
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    width:"100%",
    paddingTop:"12.5%",
    paddingBottom:"10%"
  },
  topRow:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  icon:{
    position: 'absolute',
    left: "5%",
  },
  mainCon:{
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
    height:"80%"
  }
})
