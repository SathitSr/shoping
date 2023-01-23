import { createStackNavigator } from "@react-navigation/stack";
import Homes from "../feature/Home";

const Stack = createStackNavigator();

export default function ModalNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductDetail" component={Homes.ProductDetail} />
    </Stack.Navigator>
  );
}
