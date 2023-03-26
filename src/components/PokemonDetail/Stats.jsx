import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Stats(props) {
  const { stats } = props;

  const barStyles = (num) => {
    const colorMap = {
      0: "#ff3e3e",
      25: "#ff3e3e",
      50: "#F08700",
      75: "#EFCA08",
      100: "#6EEB83",
    };
    const nearest = Object.keys(colorMap).reduce((prev, curr) => {
      return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
    });
    return {
      backgroundColor: colorMap[nearest],
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item) => (
        <View key={item.stat.name} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>
              {item.stat.name.replace(/\-/g, " ")}
            </Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "35%",
  },
  statName: {
    fontSize: 14,
    color: "#6b6b6b",
    textTransform: "capitalize",
  },
  blockInfo: {
    width: "65%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "15%",
    fontSize: 14,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "85%",
    height: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 10,
    borderRadius: 20,
  },
});
