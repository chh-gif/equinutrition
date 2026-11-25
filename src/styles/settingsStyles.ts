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
    marginBottom: 25,
  },

  settingItem: {
    backgroundColor: Colors.white,
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },

  settingTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
  },

  settingDescription: {
    marginTop: 4,
    color: Colors.muted,
    fontSize: 14,
  },
});

export default styles;