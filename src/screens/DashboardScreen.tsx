import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { styles } from "../app/styles/dashboardStyles";

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <Text style={styles.subtitle}>
        Welkom terug!
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/horse")}
      >
        <Text style={styles.cardTitle}>
          🐴 Mijn Paard
        </Text>

        <Text style={styles.cardText}>
          Bekijk gegevens van je paard
        </Text>
      </TouchableOpacity>

<TouchableOpacity
  style={styles.card}
  onPress={() => router.push("/feedingplan")}
>
<Text style={styles.cardTitle}>
          🌾 Voederplan
        </Text>
        <Text style={styles.cardText}>
          Dagelijkse voeding bekijken
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>
          ⚙️ Instellingen
        </Text>

        <Text style={styles.cardText}>
          App instellingen aanpassen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DashboardScreen;