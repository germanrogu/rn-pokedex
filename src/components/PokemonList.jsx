import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({
  pokemons = [],
  loadPokemons,
  loading,
  isNext,
}) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon, index) => String(index)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={() => {
        if (!loading && isNext && pokemons.length > 0) {
          loadPokemons();
        }
      }}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        isNext &&
        pokemons.length > 0 && (
          <ActivityIndicator
            size='large'
            style={styles.spinner}
            color='#AEAEAE'
          />
        )
      }
      bounces={false}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  spinner: {
    marginTop: 20,
    marginBottom: 50,
  },
});
