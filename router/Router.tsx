import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MenuScreen from "../pages/MenuScreen";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
      }}
    >
      <Stack.Screen
        name="McDelivery"
        component={MenuScreen}
        options={{
          headerSearchBarOptions: {
            onSearchButtonPress(e) {
              console.log(e);
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}
