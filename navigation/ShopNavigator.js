import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator } from "react-navigation-stack";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },

  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigation = createStackNavigator(
  {
    Orders: OrderScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

// const ShowNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigators,
//     Orders: OrdersNavigation,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary,
//     },
//   }
// );

export default createAppContainer(ProductsNavigator);
