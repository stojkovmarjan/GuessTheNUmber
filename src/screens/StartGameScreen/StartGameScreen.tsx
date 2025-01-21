import { Alert, Text, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import BackgroundWrapper from "../../BackgroundWrapper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { GameScreenRouteProps } from "../GameScreen";
type RouteParamsList = {
  GameScreen: GameScreenRouteProps;
};
const StartGameScreen = () => {
  const navigation = useNavigation<NavigationProp<RouteParamsList>>();
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
   
  };

  const onReset = () => {
    setEnteredValue("");
    setMyNumber(0);
  };
  const onConfirm = () => {
    if (!isValidNumber()) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 100", [
        { text: "OK" },
      ]);
      return;
    }
    // HERE NAVIGATE TO THE GAME SCREEN
    navigation.navigate("GameScreen", {
      theNumber: myNumber,
    });
    
  };

  const isValidNumber = (): boolean => {
    return myNumber > 0 && myNumber <= 100;
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <BackgroundWrapper>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.startGameLabelContainer}>
            <Text style={{ fontSize: 24, color: "white" }}>
              Start a new game
            </Text>
          </View>
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
              <PrimaryButton
                buttonHeight={40}
                buttonWidth={120}
                onPress={onReset}
              >
                Reset
              </PrimaryButton>
              <PrimaryButton
                buttonHeight={40}
                buttonWidth={120}
                onPress={onConfirm}
              >
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </SafeAreaView>
      </BackgroundWrapper>
    </SafeAreaProvider>
  );
};

export default StartGameScreen;
