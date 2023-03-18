import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteStack"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
