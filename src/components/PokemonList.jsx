import { FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon, index) => String(index)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
    paddingBottom: 25,
  },
});
