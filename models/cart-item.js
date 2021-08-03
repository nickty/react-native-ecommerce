class CartItem {
  constructor(productTitle, productPrice, quantity, sum) {
    this.quantity = quantity;
    this.productTitle = productTitle;
    this.productPrice = productPrice;
    this.sum = sum;
  }
}

export default CartItem;
