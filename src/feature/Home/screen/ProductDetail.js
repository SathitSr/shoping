import { View, Text, TouchableOpacity } from "react-native";
import PreviewImage from "../component/PreviewImage";
import ProductDetailSection from "../component/ProductDetailSection";

const ProductDetail = ({ route }) => {
  const { detail } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <PreviewImage images={detail.image} />
      <ProductDetailSection product={detail} />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "5%",
          width: "100%",
          alignItems: "center",
        }}
        onPress={() => console.log("add product to cart")}
      >
        <View
          style={{
            width: "80%",
            borderWidth: 1,
            borderColor: "#ACACAC",
            alignItems: "center",
            borderRadius: 20,
            padding: 15,
          }}
        >
          <Text>เพิ่มสินค้าลงในตะกล้า</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
