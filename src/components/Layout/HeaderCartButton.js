import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

// styled cart button with a cart icon
export default function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // using the context hook, to consume the context provided, in the component to get the amount
  // this context is managed by header (which is in the closest provider of the context)
  const cartCtx = useContext(CartContext); //store the context

  const { items } = cartCtx;

  // the number of meals selected of the menu
  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // using useEffect for bump effect on the cart button for every item added(side effect)
  useEffect(() => {
    // checking if the array of items is clear and adding the bump effect
    if (items.length === 0) {
      return;
    }
    // the first time we add an item the 'bump' happens
    setBtnIsHighlighted(true);

    // setting the effect to last just 300 ms and changing it to false to be able to be added again every time the 'items' dependecny is changed
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // clearing the timeout and the effect
    return () => {
      clearTimeout(timer);
    };
    // happens every time the 'items' dependency is changed
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
