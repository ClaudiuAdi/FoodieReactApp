import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

// component rendering a single meal item
export default function MealItem(props) {
  // connecting the component to the context
  const cartCtx = useContext(CartContext);

  // refactor the price
  const price = `$${props.price.toFixed(2)}`;

  // function to be passed to the form to receive the amount
  const addToCartHandler = (amount) => {
    // accessing the function to add to cart in the context
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
