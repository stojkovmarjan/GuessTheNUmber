import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen/StartGameScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./src/AppNavigator"; // Adjust the import path as necessary

const App = () => {
  // return <StartGameScreen />;
  return <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
};


export default App;
