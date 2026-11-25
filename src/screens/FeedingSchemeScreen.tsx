import React from "react";
import { View, Text } from "react-native";

function FeedingSchemeScreen() {
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
        Voerschema
      </Text>

      <Text>🌾 Hooi</Text>
      <Text>3x per dag</Text>

      <Text style={{ marginTop: 15 }}>
        🐴 Krachtvoer
      </Text>
      <Text>2x per dag</Text>

      <Text style={{ marginTop: 15 }}>
        💊 Mineralen
      </Text>
      <Text>1x per dag</Text>

      <Text style={{ marginTop: 15 }}>
        💧 Water
      </Text>
      <Text>Altijd beschikbaar</Text>

      <Text style={{ marginTop: 15 }}>
        🧂 Zoutliksteen
      </Text>
      <Text>1x per dag</Text>
    </View>
  );
}

export default FeedingSchemeScreen;