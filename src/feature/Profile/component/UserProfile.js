import { View, Text, Image } from "react-native";

const UserProfile = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginTop: 25,
        justifyContent: "center",
      }}
    >
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU",
        }}
        style={{
          width: 75,
          height: 75,
          resizeMode: "contain",
          borderRadius: 40,
        }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18, color: "#171717" }}>Sathit Srisawat</Text>
        <Text style={{ fontSize: 14, color: "#171717" }}>08014567890</Text>
      </View>
    </View>
  );
};

export default UserProfile;
