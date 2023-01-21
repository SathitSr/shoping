import { Text, View, useWindowDimensions, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../styles";

const store = require("../../../../assets/images/store.png");
const humen = require("../../../../assets/images/people.png");

const ContentHeader = () => {
  const window = useWindowDimensions();

  return (
    <View
      style={{
        height: window.height * 0.2,
        backgroundColor: "#13A28E",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <Image style={styles.imageBannerPeople} source={humen} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Image style={styles.imageBannerStore} source={store} />
        </View>
      </View>

      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          width: "100%",
          position: "absolute",
          top: "10%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="search" size={24} color="#c4c4c4" />
          <Text style={{ marginLeft: 10, color: "#c4c4c4" }}>Search</Text>
        </View>
      </View>
    </View>
  );
};

export default ContentHeader;
