import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";

const image = require("../../assets/images/background-gradient-lights.jpg");

const StartGameScreen = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.label}>Enter Your number</Text>
          <TextInput style={styles.input} />
          <View style={styles.buttonsContainer}>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
  input: {
    width: 50,
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  label: {
    color: "white",
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});

export default StartGameScreen;
