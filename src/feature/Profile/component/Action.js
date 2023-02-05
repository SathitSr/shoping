import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
const Action = () => {
  return (
    <View style={{ padding: 15, flex: 1 }}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", height: 100 }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#707070",
          }}
        >
          <AntDesign name="wallet" size={25} color="black" />
        </View>
        <Text style={{ marginLeft: 15 }}>ที่ต้องชำระเงิน</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", height: 100 }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#707070",
          }}
        >
          <FontAwesome5 name="plane-departure" size={25} color="black" />
        </View>
        <Text style={{ marginLeft: 15 }}>ที่ต้องจัดส่ง</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", height: 100 }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#707070",
          }}
        >
          <FontAwesome name="shopping-bag" size={25} color="black" />
        </View>
        <Text style={{ marginLeft: 15 }}>ที่ต้องรับ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Action;
