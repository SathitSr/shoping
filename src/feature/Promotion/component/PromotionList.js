import { View, FlatList, Image } from "react-native";

const PromotionList = (props) => {
  const { promotions } = props;

  return (
    <View>
      <FlatList
        data={promotions}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 15,
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
      />
    </View>
  );
};

export default PromotionList;
