import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/feedingPlanStyles";

function FeedingPlanScreen() {
  const [activeTab, setActiveTab] = useState("vandaag");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Voederplan
      </Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("vandaag")}
          style={[
            styles.tabButton,
            activeTab === "vandaag"
              ? styles.activeTabButton
              : null,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "vandaag"
                ? styles.activeTabText
                : null,
            ]}
          >
            Vandaag
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("schema")}
          style={[
            styles.tabButton,
            activeTab === "schema"
              ? styles.activeTabButton
              : null,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "schema"
                ? styles.activeTabText
                : null,
            ]}
          >
            Voerschema
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "vandaag" ? (
        <View>
          <Text style={styles.item}>
            🌾 Hooi
          </Text>

          <Text style={styles.detail}>
            08:00 | 12:00 | 18:00
          </Text>

          <Text style={styles.item}>
            🐴 Krachtvoer
          </Text>

          <Text style={styles.detail}>
            08:00 | 18:00
          </Text>

          <Text style={styles.item}>
            💊 Mineralen
          </Text>

          <Text style={styles.detail}>
            1x per dag
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.scheduleItem}>
            🌾 Hooi - 3x per dag
          </Text>

          <Text style={styles.scheduleItem}>
            🐴 Krachtvoer - 2x per dag
          </Text>

          <Text style={styles.scheduleItem}>
            💊 Mineralen - 1x per dag
          </Text>

          <Text style={styles.scheduleItem}>
            💧 Water - Altijd beschikbaar
          </Text>

          <Text style={styles.scheduleItem}>
            🧂 Zoutliksteen - 1x per dag
          </Text>
        </View>
      )}
    </View>
  );
}

export default FeedingPlanScreen;