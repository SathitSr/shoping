import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBottomNavigation from "./TabBottomNavigation";

const Stack = createStackNavigator();

export default function BaseNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="TabBottomNavigation"
          component={TabBottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
