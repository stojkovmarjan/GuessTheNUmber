import { View, Text, Pressable, StyleSheet } from "react-native";

type PrimaryButtonProps = {
  children: React.ReactNode;
  buttonWidth?: number ;
  buttonHeight?: number;
  onPress: () => void;
};

// const buttonWidth=120;
// const buttonHeight=40;
const PrimaryButton = ({ children, buttonWidth,buttonHeight, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container,{width:buttonWidth, height:buttonHeight}, pressed && styles.pressed]}
      onPress={() => {
        onPress();
      }}
    >
      <View>
        <Text style={styles.label}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B0045",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  pressed: {
    backgroundColor: "#4B0075",
  },
  label: {
    color: "white",
    fontSize: 12,
  },
});

export default PrimaryButton;
