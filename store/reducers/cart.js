import CartItem from "../../models/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

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
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = state.items[action.pid].quanity;
      let updateCartItems;
      if (currentQty > 1) {
        //need to reduce it not to erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quanity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.prodTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updateCartItems = { ...state.items, [action.pid]: updateCartItem };
      } else {
        updateCartItems = { ...state.items };
        delete updateCartItems[action.pid];
      }
      return {
        ...state,
        items: updateCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
  }
  return state;
};
