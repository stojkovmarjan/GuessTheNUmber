import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
  StackActions,
} from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackgroundWrapper from "../BackgroundWrapper";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

export type GameScreenRouteProps = {
  theNumber: number;
};

type GameOverScreenRouteProps = {
  GameOver: { rounds: number; theNumber: number };
};

const generateRandomNumber = (
  upperLimit: number,
  lowerLimit: number
): number => {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
};

const GameScreen = () => {
  const navigation = useNavigation<NavigationProp<GameOverScreenRouteProps>>();
  const route = useRoute<RouteProp<{ params: GameScreenRouteProps }>>();

  const [guess, setGuess] = useState<number>(0);

  const [upperLimit, setUpperLimit] = useState<number>(100);
  const [lowerLimit, setLowerLimit] = useState<number>(1);

  const [guessList, setGuessList] = useState<number[]>([]);

  const { theNumber } = route.params;

  const getRandomNumber = (newLowerLimit: number, newUpperLimit: number) => {
    const newGuess = generateRandomNumber(newUpperLimit, newLowerLimit);
    setGuess(newGuess);
    console.log("upperLimit", newUpperLimit);
    console.log("lowerLimit", newLowerLimit);

    setLowerLimit(newLowerLimit);
    setUpperLimit(newUpperLimit);
    setGuessList((currentGuessList) => [newGuess, ...currentGuessList]);
  };

  useEffect(() => {
    if (guess === 0) {
      getRandomNumber(lowerLimit, upperLimit);
    }
  }, []); // empty array, runs once when component is created

  const handleHigher = () => {
    if (theNumber < guess) {
      Alert.alert("Cheating Detected", "You know the number is lower.", [
        { text: "OK" },
      ]);
      return;
    }
    getRandomNumber(guess + 1, upperLimit);
  };

  const handleLower = () => {
    if (theNumber > guess) {
      Alert.alert("Cheating Detected", "You know the number is higher.", [
        { text: "OK" },
      ]);
      return;
    }
    getRandomNumber(lowerLimit, guess - 1);
  };

  useEffect(() => {
    // this
    if (guess === theNumber) {
      console.log("Game Over");

      navigation.dispatch(
        StackActions.replace("GameOver", {
          rounds: guessList.length,
          theNumber: theNumber,
        })
      );
    }
  }, [guess, lowerLimit, upperLimit]); // will run whenever any of these values change

  console.log("guess", guess);
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <BackgroundWrapper>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.gameLabelContainer}>
            <Text style={{ fontSize: 24, color: "white" }}>
              Opponent's Guess
            </Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.label}>{guess}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>Higher or Lower</Text>

            <View style={styles.buttonsContainer}>
              <PrimaryButton
                buttonHeight={40}
                buttonWidth={120}
                onPress={handleHigher}
              >
                Higher
              </PrimaryButton>
              <PrimaryButton
                buttonHeight={40}
                buttonWidth={120}
                onPress={handleLower}
              >
                Lower
              </PrimaryButton>
            </View>
          </View>
          <Text style={styles.label}>Guess History</Text>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {guessList.map((guess, index) => (
              <View key={index} style={styles.scrollViewItemContainer}>
                <Text style={styles.scrollItemLabel}>
                  #{guessList.length - index}
                </Text>
                <Text style={styles.scrollItemLabel}>
                  Opponent's guess: {guess}
                </Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </BackgroundWrapper>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
  },
  gameLabelContainer: {
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  numberContainer: {
    width: "80%",
    height: 80,
    borderWidth: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "rgba(240, 58, 225, 0.5)",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },

  label: {
    color: "white",
    fontSize: 24,
  },

  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  scrollView: {
    width: "60%",
    alignItems: "center",
  },
  scrollViewItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    marginVertical: 5,
  },
  scrollItemLabel: {
    fontSize: 14,
    color: "yellow",
  },
});

export default GameScreen;
