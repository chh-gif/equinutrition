import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.text,
  },

  subtitle: {
    color: Colors.muted,
    marginBottom: 30,
  },

  card: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  cardText: {
    color: Colors.muted,
    marginTop: 5,
  },
});