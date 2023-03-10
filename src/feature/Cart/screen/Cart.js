import * as React from "react";
import { Button, View } from "react-native";

const Cart = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default Cart;
