import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// function used in the useReducer hook to deal with the dispatch function in different situations
const cartReducer = (state, action) => {
  // adding a new item to the list
  if (action.type === "ADD") {
    // updating the amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // checking if we alreday have in the array an element with the same id we are adding
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // we store the item that already exists in the array
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // checking if the value defined above exists (if the element its already part of the element)
    if (existingCartItem) {
      // if its already part of the array
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // we assign the old array values to a new array
      updatedItems = [...state.items];
      // to the cartItem that exist we assign the new item with the amount updated(if sushi already was in the array and the amount was 1, now it is 2 (in case we added 1 more)
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // adding the item
      updatedItems = state.items.concat(action.item);
    }

    // returning the updated object
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // finding the cart item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // storing the found item
    const existingItem = state.items[existingCartItemIndex];

    // updating the price regardless if we remove only one of many items of one type or if we remove the single item of on type
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    // we check if its ordered one item of one type
    if (existingItem.amount === 1) {
      // if it is => we remove it form the array
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if not we just decrease the amount ordered by one
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // return the updated cart list
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

// manage the card context data and provide it to the components that need to access it
export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // helper functions
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // managing the context data
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* any components which need acces to the cart that are wrapped around should get accest to the context */}
      {props.children}
    </CartContext.Provider>
  );
}
