import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import productsMockup from "../../../components/mockup/productsList.json";
import { Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const ContentSection = () => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={productsMockup}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              height: 300,
              flex: 1,
              padding: 5,
            }}
            onPress={() =>
              navigation.navigate("Modal", {
                screen: "ProductDetail",
                params: {
                  detail: item,
                },
              })
            }
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  flex: 5,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 2, paddingLeft: 10, paddingRight: 10 }}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 12,
                    color: "#4D4D4D",
                    marginTop: 5,
                  }}
                >
                  {item.product_name}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Text
                    style={{
                      marginRight: 10,
                      color: "#c4c4c4",
                      textDecorationLine: "line-through",
                    }}
                  >
                    ฿{item.price_befor_discount}
                  </Text>
                  <Text style={{ color: "#FC6D00" }}>
                    ฿{item.price_after_discount}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-start",
                    }}
                  >
                    <Rating imageSize={10} startingValue={item.rate} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        color: "#c4c4c4",
                        fontSize: "12",
                      }}
                    >
                      ขายแล้ว{item.sold}
                    </Text>
                  </View>
                </View>
                <Text style={{ color: "#c4c4c4", fontSize: "12" }}>
                  {item.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ContentSection;
