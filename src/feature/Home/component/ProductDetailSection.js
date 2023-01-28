import { View, Text, ScrollView, FlatList } from "react-native";
import { Rating } from "react-native-ratings";

const ProductDetailSection = (props) => {
  const { product } = props;

  return (
    <View
      style={{
        position: "absolute",
        top: "50%",
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: 25,
          padding: 25,
        }}
      >
        <ScrollView
          style={{
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 16 }}>{product.product_name}</Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginRight: 10,
                color: "#c4c4c4",
                textDecorationLine: "line-through",
                fontSize: 16,
              }}
            >
              ฿{product.price_befor_discount}
            </Text>
            <Text style={{ color: "#FC6D00", marginRight: 10, fontSize: 16 }}>
              ฿{product.price_after_discount}
            </Text>
            <View
              style={{
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Rating imageSize={14} startingValue={product.rate} />
            </View>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  color: "#c4c4c4",
                  fontSize: "12",
                }}
              >
                ขายแล้ว{product.sold}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 16 }}>รายละเอียดสินค้า</Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 12, color: "#A0A0A0" }} numberOfLines={5}>
              {product.product_detail}
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 12, color: "#A0A0A0" }}>Read more</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetailSection;
