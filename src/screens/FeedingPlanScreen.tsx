import React from "react";
import { View, Text } from "react-native";

function VoederplanScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF8F3",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        🌾 Voederplan
      </Text>

      <Text>Ochtend</Text>
      <Text>• 2 kg brok</Text>
      <Text>• Hooi</Text>

      <Text
        style={{
          marginTop: 20,
        }}
      >
        Middag
      </Text>

      <Text>• Hooi</Text>

      <Text
        style={{
          marginTop: 20,
        }}
      >
        Avond
      </Text>

      <Text>• 2 kg brok</Text>
      <Text>• Hooi</Text>
    </View>
  );
}

export default VoederplanScreen;