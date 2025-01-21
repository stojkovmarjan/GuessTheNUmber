import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute, RouteProp } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BackgroundWrapper from "../BackgroundWrapper";

export type GameScreenRouteProps = {
    theNumber: number;
};

const GameScreen = () => {
    const route = useRoute<RouteProp<{ params: GameScreenRouteProps }>>();
    const { theNumber } = route.params;
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <BackgroundWrapper>
            <SafeAreaView style={styles.safeAreaView}>
                <Text>Game Screen</Text>
                <Text>The number is: {theNumber}</Text>
            </SafeAreaView>
            </BackgroundWrapper>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    safeAreaView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default GameScreen;