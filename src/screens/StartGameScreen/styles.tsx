import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
  input: {
    width: 50,
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(204, 204, 204, 1)",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  label: {
    color: "white",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
