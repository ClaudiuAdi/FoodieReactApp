import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

// component rendering a single meal item
export default function MealItem(props) {
  // refactor the price
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}
