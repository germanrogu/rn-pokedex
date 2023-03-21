import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonDetailByUrl } from "../api/Pokemon";

export default function Pokedex() {
  const [data, setData] = useState({
    loading: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        setData({ loading: true, error: null });
        const { results } = await getPokemons();

        const pokemonDetailResults = await Promise.all(
          results.map(async (pokemon) => {
            const getPokemonsDetails = await getPokemonDetailByUrl(pokemon.url);
            return {
              id: getPokemonsDetails.id,
              name: getPokemonsDetails.name,
              types: getPokemonsDetails.types[0],
              order: getPokemonsDetails.order,
              image: getPokemonsDetails.sprites.other.home.front_default,
            };
          })
        );
        setData({ loading: false, data: pokemonDetailResults });
      } catch (error) {
        console.error(error);
        setData({ loading: false, error });
      }
    })();
  }, []);

  if (data.loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <ScrollView>
      <Text>{JSON.stringify(data.data, null, 2)}</Text>
    </ScrollView>
  );
}
