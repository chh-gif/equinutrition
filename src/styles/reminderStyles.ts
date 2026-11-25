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
    color: Colors.text,
    marginBottom: 20,
  },

  card: {
    backgroundColor: Colors.white,
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },

  time: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 4,
  },

  description: {
    color: Colors.text,
    fontSize: 16,
  },
});

export default styles;