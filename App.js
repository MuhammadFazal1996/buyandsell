import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {

  const {landscape} = useDeviceOrientation();

  return ( 
   <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
    width: "100%",
    height: "30%",

  },
});
