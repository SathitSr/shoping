import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromotionList from "../component/PromotionList";
import axios from "axios";

const Promotion = () => {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/promotion")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const ContentHeaderFlatList = () => {
    return (
      <View
        style={{
          alignItems: "center",
          padding: 15,
          flex: 0.5,
          backgroundColor: "#c4c4c4c",
        }}
      >
        <Text style={{ fontSize: 18 }}>Promotion</Text>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return <PromotionList promotionData={data} />;
  };

  return (
    <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#fff" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ContentHeaderFlatList}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default Promotion;
