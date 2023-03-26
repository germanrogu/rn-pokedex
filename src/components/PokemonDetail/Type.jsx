import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getPokemonByColorType } from "../../utils/getColorByPokemonType";

export default function Type({ types }) {
  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.name}
          style={{
            backgroundColor: getPokemonByColorType(item.type.name),
            ...styles.pill,
          }}
        >
          <Text style={styles.name}>
            {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
