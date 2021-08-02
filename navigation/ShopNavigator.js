import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator } from "react-navigation-stack";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
