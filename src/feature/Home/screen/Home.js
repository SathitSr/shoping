import React, { useState, useEffect } from "react";
import { View, FlatList, Pressable, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContentHeader from "../component/ContentHeader";
import ContentSection from "../component/ContentSection";
import Category from "../component/Category";
import axios from "axios";

const Home = () => {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/get-products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const ContentHeaderFlatList = () => {
    return (
      <>
        <Pressable onPress={() => console.log("search")}>
          <ContentHeader />
        </Pressable>
        <Category />
      </>
    );
  };

  const ListFooterComponent = () => {
    return <ContentSection productData={data} />;
  };

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ContentHeaderFlatList}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default Home;
