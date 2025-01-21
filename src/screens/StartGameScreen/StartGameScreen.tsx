import { ImageBackground, Text, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import BackgroundWrapper from "../../BackgroundWrapper";

const image = require("../../../assets/images/background-gradient-lights.jpg");

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [myNumber, setMyNumber] = useState(0);

  const onValueChange = (value: string) => {
    if (value === "") {
      setEnteredValue("");
      setMyNumber(0);
      return;
    }
    // Remove any non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    let number = parseInt(numericValue, 10);

    setEnteredValue(numericValue);
    setMyNumber(number);
    console.log(number);
  };

  const onReset = () => {
    setEnteredValue("");
  };
  const onConfirm = () => {
    console.log(enteredValue);
    console.log(myNumber);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <BackgroundWrapper>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.label}>Enter Your number</Text>
            <TextInput
              style={[
                styles.input,
                (myNumber <= 0 || myNumber > 100) &&
                  enteredValue !== "" &&
                  styles.inputError,
              ]}
              keyboardType="number-pad"
              value={enteredValue}
              onChangeText={onValueChange}
              maxLength={3}
            />
            {(myNumber <= 0 || myNumber > 100) && enteredValue !== "" && (
              <Text style={styles.labelError}>
                Please enter a number between 1 and 100
              </Text>
            )}
            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
              <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
            </View>
          </View>
        </SafeAreaView>
      </BackgroundWrapper>
      {/* </ImageBackground> */}
    </SafeAreaProvider>
  );
};

export default StartGameScreen;
