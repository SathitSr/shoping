import * as React from "react";
import { View, FlatList, Pressable, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContentHeader from "../component/ContentHeader";
import ContentSection from "../component/ContentSection";
import Category from "../component/Category";

const Home = () => {
  const insets = useSafeAreaInsets();

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
    return <ContentSection />;
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
