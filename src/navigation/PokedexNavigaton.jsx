import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokedexScreen from "../screens/Pokedex";

const Stack = createNativeStackNavigator();

export default function PokedexNavigaton() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexStack"
        component={PokedexScreen}
        options={{ title: "Pokedex", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
