import React from "react";

// data will not be used(it will be used for autocompletion)
// blueprint for the context provider to use and to manage
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
