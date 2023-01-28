import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromotionList from "../component/PromotionList";

const Promotion = () => {
  const insets = useSafeAreaInsets();

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
    return <PromotionList />;
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
