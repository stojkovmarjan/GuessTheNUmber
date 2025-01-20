import {
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

const image = require("../../../assets/images/background-gradient-lights.jpg");

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const onValueChange = (value: string) => {
    setEnteredValue(value);
  };

  const onReset = () => {
    setEnteredValue("");
  };
  const onConfirm = () => {
    console.log(enteredValue);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.label}>Enter Your number</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              value={enteredValue}
              onChangeText={onValueChange}
            />
            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
              <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default StartGameScreen;
