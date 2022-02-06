import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import LandingScreen from './screen/LandiingScreen';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default function App() {
  return (
    <LandingScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
