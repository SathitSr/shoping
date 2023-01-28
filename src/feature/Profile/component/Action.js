import { View, Text } from "react-native";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Action = () => {
  return (
    <View style={{ padding: 15, flex: 1 }}>
      <View style={{ height: 100, flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 1,
            borderColor: "#707070",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="wallet" size={25} color="black" />
        </View>
        <Text style={{ marginLeft: 15 }}>ที่ต้องชำระเงิน</Text>
      </View>
      <View style={{ height: 100, flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 1,
            borderColor: "#707070",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="plane-departure" size={24} color="black" />
        </View>
        <Text style={{ marginLeft: 15 }}>ที่ต้องจัดส่ง</Text>
      </View>
      <View style={{ height: 100, flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 1,
            borderColor: "#707070",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="shopping-bag" size={24} color="black" />
        </View>
        <Text style={{ marginLeft: 15 }}>ที่ต้องรับ</Text>
      </View>
    </View>
  );
};

export default Action;
