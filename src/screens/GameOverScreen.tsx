import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackgroundWrapper from "../BackgroundWrapper";
type GameOverScreenRouteProps = {
  rounds: number;
  theNumber: number;
};
const GameOverScreen = () => {
  const route = useRoute<RouteProp<{ params: GameOverScreenRouteProps }>>();
  const { rounds, theNumber } = route.params;


  return (
    <SafeAreaProvider>
       <StatusBar style="light" />
       <BackgroundWrapper>
      <SafeAreaView>
        <Text>The Game is Over!</Text>
        <Text>
          Your phone guessed the number {theNumber} in {rounds} rounds.
        </Text>
      </SafeAreaView>
      </BackgroundWrapper>
    </SafeAreaProvider>
  );
};

export default GameOverScreen;
