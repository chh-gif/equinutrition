import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Horse } from "../types/horse";
import styles from "../styles/horseStyles";

function HorseScreen() {
  const [horse, setHorse] = useState<Horse>({
    naam: "Thunder",
    ras: "BWP",
    leeftijd: 8,
    gewicht: 620,
  });

  function saveHorse() {
    Alert.alert(
      "Opgeslagen",
      "De gegevens van het paard zijn opgeslagen."
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mijn Paard
      </Text>

      <Text style={styles.label}>Naam</Text>
      <TextInput
        value={horse.naam}
        onChangeText={(text) =>
          setHorse({
            ...horse,
            naam: text,
          })
        }
        style={styles.input}
      />

      <Text style={styles.label}>Ras</Text>
      <TextInput
        value={horse.ras}
        onChangeText={(text) =>
          setHorse({
            ...horse,
            ras: text,
          })
        }
        style={styles.input}
      />

      <Text style={styles.label}>Leeftijd</Text>
      <TextInput
        value={horse.leeftijd.toString()}
        keyboardType="numeric"
        onChangeText={(text) =>
          setHorse({
            ...horse,
            leeftijd: Number(text),
          })
        }
        style={styles.input}
      />

      <Text style={styles.label}>Gewicht</Text>
      <TextInput
        value={horse.gewicht.toString()}
        keyboardType="numeric"
        onChangeText={(text) =>
          setHorse({
            ...horse,
            gewicht: Number(text),
          })
        }
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={saveHorse}
      >
        <Text style={styles.buttonText}>
          Opslaan
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HorseScreen;