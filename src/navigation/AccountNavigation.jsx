import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/Account";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          title: "Mi cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
