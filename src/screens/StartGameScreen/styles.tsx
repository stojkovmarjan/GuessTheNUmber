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
    marginBottom: 4,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  inputError: {
    color: "red",
  },
  label: {
    color: "white",
    fontSize: 18,
  },
  labelError: {
    color: "red",
    fontSize: 12,
    marginBottom: 4,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

});
