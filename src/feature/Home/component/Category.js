import { View, FlatList, Image } from "react-native";

const coupon = require("../../../../assets/images/coupon.png");
const flshsale = require("../../../../assets/images/flshsale.png");
const freeDelivery = require("../../../../assets/images/freeDelivery.png");
const newProduct = require("../../../../assets/images/newProduct.png");
const other = require("../../../../assets/images/other.png");

const Category = () => {
  return (
    <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}>
      <FlatList
        data={[freeDelivery, coupon, newProduct, flshsale, other]}
        numColumns={5}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              padding: 5,
            }}
          >
            <View
              style={{
                height: 50,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={item}
                style={{
                  width: "90%",
                  height: "90%",
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Category;
