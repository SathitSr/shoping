import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import UserProfile from "../component/UserProfile";
import ProductList from "../component/ProductList";

const Cart = () => {
  const insets = useSafeAreaInsets();

  const ContentHeaderFlatList = () => {
    return <UserProfile />;
  };

  const ListFooterComponent = () => {
    return <ProductList />;
  };

  return (
    <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#fff" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
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
            padding: 15,
            backgroundColor: "#979BFA",
            width: "80%",
            borderRadius: 20,
            flexDirection: "row",
          }}
          onPress={() => {
            console.log("tetete");
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#fff", fontSize: 14 }}>Total</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#fff", fontSize: 14 }}>฿2500</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Text style={{ color: "#fff", fontSize: 14, marginRight: 5 }}>
              CONFIRM
            </Text>
            <AntDesign name="arrowright" size={18} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
