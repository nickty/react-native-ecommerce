import CartItem from "../../models/cart-item";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        //already have the item in the cart
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quanity + 1,
          prodTitle,
          productPrice,
          state.items[addedProduct.id].sum + productPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productPrice,
          prodTitle,
          productPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct]: newCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      }

    default:
      state;
  }
  return state;
};
