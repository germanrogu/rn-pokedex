import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { getPokemonByColorType } from "../utils/getColorByPokemonType";

export default function PokemonCard({ pokemon }) {
  const goToPokemon = () => {
    console.log("pokemon send ", pokemon);
  };

  const bgStyle = {
    backgroundColor: getPokemonByColorType(pokemon.type),
    ...styles.card,
  };

  return (
    <TouchableOpacity
      style={bgStyle}
      onPress={goToPokemon}
      pressDuration={0.05}
    >
      <View>
        <Text style={styles.order}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
        <Text style={styles.name}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Text>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    paddingStart: 10,
  },
  order: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 10,
  },
});