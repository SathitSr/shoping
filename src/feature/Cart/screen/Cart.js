import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import UserProfile from "../component/UserProfile";
import ProductList from "../component/ProductList";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Cart = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [allProductId, setAllProductId] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      getCart();
    });

    return unsubscribe;
  }, [navigation]);

  const getCart = () => {
    axios
      .get("http://localhost:3500/api/cart?user_id=1")
      .then((request) => {
        setData(request.data);

        let prepareProductId = [];
        request.data.map((el) => {
          prepareProductId.push(el.product_id);
        });
        setAllProductId(prepareProductId);
      })
      .catch((e) => {
        console.log("e : ", e);
      });
  };

  const insets = useSafeAreaInsets();

  const ContentHeaderFlatList = () => {
    return <UserProfile />;
  };

  const ListFooterComponent = () => {
    return <ProductList productList={data} />;
  };

  const checkOut = () => {
    axios
      .post("http://localhost:3500/api/checkout", {
        product_id: allProductId,
        address: "test",
        user_id: 1,
      })
      .then((response) => {
        getCart();
      })
      .catch((e) => console.log("e : ", e));
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
          onPress={() => checkOut()}
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
