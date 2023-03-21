import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemons } from "../api/Pokemon";

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
        const { results: data } = await getPokemons();
        console.log(JSON.stringify(data, null, 2));
        setData({ loading: false, data });
      } catch (error) {
        console.error(error);
        setData({ loading: false, error });
      }
    })();
  }, []);

  if (data.loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Cargando...</Text>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pokedex</Text>
    </View>
  );
}
