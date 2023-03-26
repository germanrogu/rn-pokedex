import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { getPokemonDetailById } from "../api/Pokemon";
import Header from "../components/PokemonDetail/Header";
import Stats from "../components/PokemonDetail/Stats";
import Type from "../components/PokemonDetail/Type";

export default function PokemonDetail({ navigation, route: { params } }) {
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name='hearto'
          color='#fff'
          size={25}
          style={{ marginRight: 20 }}
        />
      ),
      headerLeft: () => (
        <Icon
          name='left'
          color='#fff'
          size={25}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailById(params.id);
        setPokemonDetail(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemonDetail) return null;

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <Header
        name={pokemonDetail.name}
        order={pokemonDetail.order}
        image={pokemonDetail.sprites.other["official-artwork"].front_default}
        type={pokemonDetail.types[0].type.name}
      />
      <Type types={pokemonDetail.types} />
      <Stats stats={pokemonDetail.stats} />
    </ScrollView>
  );
}
