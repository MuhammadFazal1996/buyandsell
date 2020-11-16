import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';


import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';



export default function App() {

  return <MessagesScreen />;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
    width: "100%",
    height: "30%",

  },
});
