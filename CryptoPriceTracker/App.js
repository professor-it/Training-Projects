import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CoinDetailedScreen from './src/screens/CoinDetailedScreen'
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>

      <CoinDetailedScreen/>
      <StatusBar style="light"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
})
