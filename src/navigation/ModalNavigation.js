import * as React from "react";
import Homes from "../feature/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ModalNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductDetail" component={Homes.ProductDetail} />
    </Stack.Navigator>
  );
}
