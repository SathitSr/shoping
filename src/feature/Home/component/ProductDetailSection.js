import { View, Text } from "react-native";
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
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          padding: 25,
        }}
      >
        <Text style={{ fontSize: 16 }}>{product.product_name}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              marginRight: 10,
              color: "#c4c4c4",
              fontSize: 16,
              textDecorationLine: "line-through",
            }}
          >
            ฿{product.price_befor_discount}
          </Text>
          <Text
            style={{
              color: "#FC6D00",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            ฿{product.price_after_discount}
          </Text>
          <View style={{ marginRight: 10, alignItems: "flex-start" }}>
            <Rating imageSize={14} startingValue={product.rate} />
          </View>
          <Text
            style={{
              color: "#c4c4c4",
              fontSize: 12,
            }}
          >
            ขายแล้ว{product.sold}
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16 }}>รายละเอียดสินค้า</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 12, color: "#A0A0A0" }} numberOfLines={5}>
            {product.product_detail}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailSection;
