import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList } from "react-native";
import UserProfile from "../component/UserProfile";
import ProductList from "../component/ProductList";

const Cart = ({ navigation }) => {
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
    </View>
  );
};

export default Cart;
