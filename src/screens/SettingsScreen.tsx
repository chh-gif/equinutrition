import React from "react";
import { View, Text, Switch } from "react-native";
import styles from "../styles/settingsStyles";

function SettingsScreen() {
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
        ⚙️ Instellingen
      </Text>

      <Text style={{ marginBottom: 10 }}>
        Meldingen
      </Text>

      <Switch value={true} />

      <Text
        style={{
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        Donkere modus
      </Text>

      <Switch value={false} />
    </View>
  );
}

export default SettingsScreen;