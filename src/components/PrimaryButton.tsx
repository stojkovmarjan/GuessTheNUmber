import { View, Text, Pressable } from "react-native";

type PrimaryButtonProps = {
  children: React.ReactNode;
};
const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = ({
    container: {
        backgroundColor: "#db2763",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "white",
        width: 120,
        alignContent: 'center',
    }
});

export default PrimaryButton;
