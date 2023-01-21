import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Carts from "../feature/Cart";
import Homes from "../feature/Home";
import Profiles from "../feature/Profile";
import Promotions from "../feature/Promotion";

const Tab = createBottomTabNavigator();

export default function TabBottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4B4B4B",
        tabBarIcon: ({ focused }) => {
          let iconName = "";
          switch (route.name) {
            case "Home": {
              iconName = "home-outline";
              break;
            }
            case "Promotion": {
              iconName = "chatbubble-ellipses-outline";
              break;
            }
            case "Cart": {
              iconName = "cart-outline";
              break;
            }
            case "Profile": {
              iconName = "ios-person-outline";
              break;
            }
          }
          return (
            <Ionicons
              name={iconName}
              size={20}
              color={focused ? "#4B4B4B" : "#b8b8b8"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Homes.Home} />
      <Tab.Screen name="Promotion" component={Promotions.Promotion} />
      <Tab.Screen name="Cart" component={Carts.Cart} />
      <Tab.Screen name="Profile" component={Profiles.Profile} />
    </Tab.Navigator>
  );
}
