import { View, Image, Text } from "react-native";

const UserProfile = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU",
        }}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
          borderRadius: 25,
        }}
      />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Sathit Srisawat</Text>
        <Text style={{ fontSize: 14, color: "#A59F9F" }}>08014567xxx</Text>
      </View>
    </View>
  );
};

export default UserProfile;
