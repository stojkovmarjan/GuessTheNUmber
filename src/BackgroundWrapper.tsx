import React, { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

type BackgroundWrapperProps = {
  children: ReactNode;
};

const image = require("../assets/images/background-gradient-lights.jpg");

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    //backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a semi-transparent overlay
  },
});

export default BackgroundWrapper;
