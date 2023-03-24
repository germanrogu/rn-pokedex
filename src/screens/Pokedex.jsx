import { View, ActivityIndicator, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonDetailByUrl } from "../api/Pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [{ loading, error }, setState] = useState({
    loading: false,
    error: null,
  });
  const [nextUrl, setNextUrl] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setState({ loading: true, error: null });
      const { results, next } = await getPokemons(nextUrl);
      setNextUrl(next);

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
      setPokemons([...pokemons, ...pokemonDetailResults]);
      setState({
        loading: false,
      });
    } catch (error) {
      console.error(error);
      setState({ loading: false, error });
    }
  };

  if (loading && nextUrl === null) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isLoading={loading}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
