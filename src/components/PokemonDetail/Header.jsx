import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { getPokemonByColorType } from "../../utils/getColorByPokemonType";

export default function Header({ name, order, image, type }) {
  const color = getPokemonByColorType(type);
  const bgStyles = [{ backgroundColor: color, ...styles.bg }];
  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 300,
    position: "absolute",
    borderBottomEndRadius: 200,
    borderBottomLeftRadius: 200,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  order: {
    color: "white",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
});
