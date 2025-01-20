import { View, Text, Pressable, StyleSheet } from "react-native";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};
const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
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
    borderWidth: 0.75,
    borderColor: "white",
    width: 120,
    alignItems: "center",
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
