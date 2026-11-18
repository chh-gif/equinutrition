import { View, Text } from "react-native";

export default function DashboardScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF8F3",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        Hallo, Max 👋
      </Text>

      <Text style={{ marginTop: 10 }}>
        Fijn dat je er bent!
      </Text>
    </View>
  );
}