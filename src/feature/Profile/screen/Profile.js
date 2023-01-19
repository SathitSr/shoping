import * as React from "react";
import { Button, View } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Promotion")}
      />
    </View>
  );
};

export default Profile;
