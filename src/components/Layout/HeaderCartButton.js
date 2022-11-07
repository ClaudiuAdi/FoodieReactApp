import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

// styled cart button with a cart icon
export default function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
