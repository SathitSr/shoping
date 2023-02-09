import { View, Text, TouchableOpacity } from "react-native";
import PreviewImage from "../component/PreviewImage";
import ProductDetailSection from "../component/ProductDetailSection";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const insets = useSafeAreaInsets();

  const addProductToCart = () => {
    axios
      .post("http://localhost:3500/api/add-cart", {
        product_id: product.id,
        user_id: 1,
      })
      .then((response) => {
        navigation.navigate("TabBottomNavigation", { screen: "Cart" });
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

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
        onPress={() => addProductToCart()}
      >
        <View
          style={{
            width: "80%",
            padding: 15,
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ACACAC",
            backgroundColor: "#ACACAC",
          }}
        >
          <Text style={{ color: "#777575" }}>เพิ่มสินค้าลงตะกล้า</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
