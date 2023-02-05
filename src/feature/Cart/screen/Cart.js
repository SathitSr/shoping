import * as React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import UserProfile from "../component/UserProfile";
import ProductList from "../component/ProductList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carts from "../../../components/mockup/Cart.json";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const insets = useSafeAreaInsets();
  const ContentHeaderFlatList = () => {
    return <UserProfile />;
  };

  const ListFooterComponent = () => {
    return <ProductList carts={Carts} />;
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, marginTop: insets.top }}>
        <FlatList
          ListHeaderComponent={ContentHeaderFlatList}
          ListFooterComponent={ListFooterComponent}
        />
        <View
          style={{
            position: "absolute",
            bottom: "2%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "80%",
              padding: 15,
              borderRadius: 20,
              backgroundColor: "#979BFA",
              flexDirection: "row",
            }}
            onPress={() => console.log("check out product")}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#fff", fontSize: 14 }}>Total</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#fff", fontSize: 14 }}>฿2500</Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#fff", fontSize: 14, marginRight: 5 }}>
                CONFIRM
              </Text>
              <AntDesign name="arrowright" size={18} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
