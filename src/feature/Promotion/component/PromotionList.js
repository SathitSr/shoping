import { View, FlatList, Image, Text } from "react-native";
import promotions from "../../../components/mockup/promotionList";

const PromotionList = () => {
  return (
    <View
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#c4c4c4c",
        flex: 1,
      }}
    >
      <FlatList
        data={promotions}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 15,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.promotion }}
              style={{
                width: 350,
                height: 100,
                borderRadius: 15,
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PromotionList;
