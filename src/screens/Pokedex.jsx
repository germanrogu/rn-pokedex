import { View, ActivityIndicator, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonDetailByUrl } from "../api/Pokemon";
import PokemonList from "../components/PokemonList";

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
              type: getPokemonsDetails.types[0].type.name,
              order: getPokemonsDetails.order,
              image:
                getPokemonsDetails.sprites.other["official-artwork"]
                  .front_default,
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

  if (data.loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={data.data} />
    </SafeAreaView>
  );
}
