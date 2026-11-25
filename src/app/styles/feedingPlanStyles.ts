import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  scheduleItem: {
  fontSize: 16,
  color: Colors.text,
  marginTop: 15,
},

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 20,
  },

  tabContainer: {
    flexDirection: "row",
    marginBottom: 25,
  },

  tabButton: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },

  activeTabButton: {
    backgroundColor: Colors.primary,
  },

  tabText: {
    color: Colors.text,
    fontWeight: "500",
  },

  activeTabText: {
    color: Colors.white,
  },

  item: {
    fontSize: 16,
    color: Colors.text,
    marginTop: 12,
  },

  detail: {
    color: Colors.muted,
    marginBottom: 8,
  },
});

export default styles;