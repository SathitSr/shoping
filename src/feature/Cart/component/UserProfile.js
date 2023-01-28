import React from "react";
import { View, Image, Text } from "react-native";

const UserProfile = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
      }}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
        }}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
          borderRadius: 40,
        }}
      />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Sathit Srisawat</Text>
        <Text style={{ fontSize: 14, color: "#A59F9F" }}>080145xxxx</Text>
      </View>
    </View>
  );
};

export default UserProfile;
