import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/reminderStyles";

function HerinneringenScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Herinneringen
      </Text>

      <View style={styles.card}>
        <Text style={styles.time}>
          08:00
        </Text>

        <Text style={styles.description}>
          Krachtvoer geven
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>
          12:00
        </Text>

        <Text style={styles.description}>
          Water controleren
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>
          18:00
        </Text>

        <Text style={styles.description}>
          Hooi geven
        </Text>
      </View>
    </View>
  );
}

export default HerinneringenScreen;