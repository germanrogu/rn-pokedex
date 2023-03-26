import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokedexScreen from "../screens/Pokedex";
import PokemonDetailScreen from "../screens/PokemonDetail";

const Stack = createNativeStackNavigator();

export default function PokedexNavigaton() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PokedexStack'
        component={PokedexScreen}
        options={{
          title: "Pokedex",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='PokemonDetail'
        component={PokemonDetailScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
