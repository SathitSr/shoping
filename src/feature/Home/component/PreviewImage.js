import { View, Image } from "react-native";
const PreviewImage = (props) => {
  const { images } = props;
  console.log("check images : ", images);
  return (
    <View style={{ height: 450 }}>
      <Image
        source={{ uri: images }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default PreviewImage;
