import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';


export default function App() {

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
      style= {{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: landscape ? "100%" : "30%"
      }}
      ></View>
    </SafeAreaView>
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
