import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image } from "react-native";
import cartsList from "../../../components/mockup/carts.json";
const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let prepare = [];
    cartsList.map((el) => {
      prepare.push({
        user_id: el.user_id,
        product_id: el.product_id,
        products: JSON.parse(el.products),
        id: el.id,
      });
    });

    setData(prepare);
  }, []);

  return (
    <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 15 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              marginBottom: 20,
              flexDirection: "row",
              paddingTop: 5,
              paddingRight: 5,
              paddingBottom: 5,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={{ uri: item.products[0].image }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 25,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={{ flex: 4, paddingTop: 15, paddingBottom: 15 }}>
              <Text numberOfLines={1}>{item.products[0].product_name}</Text>
              <Text
                numberOfLines={1}
                style={{ marginTop: 10, color: "#979BFA" }}
              >
                + ฿{item.products[0].price_after_discount}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductList;
