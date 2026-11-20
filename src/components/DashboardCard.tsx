import React from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";

import styles from "../styles/dashboardStyles";

type DashboardCardProps = {
  title: string;
  description: string;
  onPress: () => void;
};

function DashboardCard({
  title,
  description,
  onPress,
}: DashboardCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>
        {title}
      </Text>

      <Text style={styles.cardText}>
        {description}
      </Text>
    </TouchableOpacity>
  );
}

export default DashboardCard;