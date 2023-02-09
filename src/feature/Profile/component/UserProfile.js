import { View, Image, Text } from "react-native";

const UserProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginTop: 25,
      }}
    >
      <View style={{ marginRight: 10 }}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
          }}
          style={{
            width: 75,
            height: 75,
            resizeMode: "contain",
            borderRadius: 40,
          }}
        />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 18, color: "#171717" }}>Isabella</Text>
        <Text style={{ fontSize: 14, color: "#535353" }}>08012345xxxx</Text>
      </View>
    </View>
  );
};

export default UserProfile;
