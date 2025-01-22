import {
  RouteProp,
  useRoute,
  useNavigation,
  NavigationProp,
  StackActions,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackgroundWrapper from "../BackgroundWrapper";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

type GameOverScreenRouteProps = {
  rounds: number;
  theNumber: number;
};
const GameOverScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<RouteProp<{ params: GameOverScreenRouteProps }>>();
  const { rounds, theNumber } = route.params;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <BackgroundWrapper>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.gameOverLabelContainer}>
            <Text style={styles.label}>Game Over!</Text>
          </View>
          <Image
            source={require("../../assets/images/success.png")}
            style={styles.image}
          />
          <Text style={styles.scoreText}>
            Your phone guessed the number {theNumber} in {rounds} rounds.
          </Text>
          <PrimaryButton
            buttonHeight={40}
            buttonWidth={120}
            onPress={() => {
              navigation.dispatch(StackActions.pop(1));
            }}
          >
            Start New Game
          </PrimaryButton>
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
  gameOverLabelContainer: {
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 40,
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  label: {
    color: "white",
    fontSize: 24,
  },
  scoreText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});

export default GameOverScreen;
