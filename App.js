import React, { useState } from "react";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import productsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
});

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
// };

const store = createStore(rootReducer);

export default function App() {
  // const [fontLoaded, setfontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return setfontLoaded(true);
  // }

  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
