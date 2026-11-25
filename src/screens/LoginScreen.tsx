import React from "react";
import { View,  Text,  TextInput,  TouchableOpacity,} from "react-native";
import { router } from "expo-router";

import styles from "../styles/loginStyles";

function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF8F3",
        padding: 30,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          color: "#E76F51",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        EquiNutrition
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 40,
          color: "#666",
        }}
      >
        Welkom terug
      </Text>

      <TextInput
        placeholder="E-mailadres"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          padding: 15,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Wachtwoord"
        secureTextEntry
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          padding: 15,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log("Button gedrückt");
          router.push("/dashboard");
        }}
        style={{
          backgroundColor: "#E76F51",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Inloggen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default  LoginScreen;