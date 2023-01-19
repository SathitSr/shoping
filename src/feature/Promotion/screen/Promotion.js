import * as React from "react";
import { Button, View } from "react-native";

const Promotion = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Promotion;
