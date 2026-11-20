import { StyleSheet } from "react-native";
import { Colors } from "../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.text,
  },

  label: {
    marginBottom: 5,
    color: Colors.text,
    fontWeight: "600",
  },

  input: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;