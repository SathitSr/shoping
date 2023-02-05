import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromotionLists from "../component/PromotionList";
import PromotionList from "../../../components/mockup/PromotionList.json";

const Promotion = () => {
  const insets = useSafeAreaInsets();

  const HeaderSection = () => {
    return (
      <View style={{ alignItems: "center", padding: 15 }}>
        <Text style={{ fontSize: 18 }}>Promotion</Text>
      </View>
    );
  };

  const DetailSection = () => {
    return <PromotionLists promotions={PromotionList} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, marginTop: insets.top }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={HeaderSection}
          ListFooterComponent={DetailSection}
        />
      </View>
    </View>
  );
};

export default Promotion;
