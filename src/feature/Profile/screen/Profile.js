import * as React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserProfile from "../component/UserProfile";
import Action from "../component/Action";

const Profile = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 0.8 }}>
        <UserProfile />
      </View>
      <View style={{ flex: 3 }}>
        <Action />
      </View>
      <View style={{ flex: 0.5, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            width: "30%",
            padding: 8,
            borderWidth: 1,
            borderColor: "#FC623F",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            console.log("logout");
          }}
        >
          <Text style={{ color: "#FC623F", fontSize: 18 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
