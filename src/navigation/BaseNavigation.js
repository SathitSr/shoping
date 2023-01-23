import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBottomNavigation from "./TabBottomNavigation";
import ModalNavigation from "./ModalNavigation";

const Stack = createStackNavigator();

export default function BaseNavigation() {
  return (
    <SafeAreaProvider>
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
          <Stack.Screen name="ModalScreen" component={ModalNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
