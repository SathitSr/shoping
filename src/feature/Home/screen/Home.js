import * as React from "react";
import { Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

export default Home;
