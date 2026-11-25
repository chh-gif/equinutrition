import { StyleSheet } from "react-native";
import { Colors } from "../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 30,
    justifyContent: "center",
  },

  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 40,
    color: Colors.muted,
  },

  input: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  loginButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 12,
  },

  loginButtonText: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
