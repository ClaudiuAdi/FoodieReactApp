import React from "react";

// context data that will not be used(it will be used for autocompletion)
// blueprint for the context
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
