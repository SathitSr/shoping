import { View, Text, TouchableOpacity } from "react-native";
import PreviewImage from "../component/PreviewImage";
import ProductDetailSection from "../component/ProductDetailSection";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <PreviewImage images={product.image} />
      <ProductDetailSection product={product} />

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "5%",
          width: "100%",
          alignItems: "center",
        }}
        onPress={() => {
          console.log("check click");
        }}
      >
        <View
          style={{
            width: "80%",
            padding: 15,
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ACACAC",
          }}
        >
          <Text style={{ color: "#777575" }}>เพิ่มสินค้าลงตะกล้า</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
