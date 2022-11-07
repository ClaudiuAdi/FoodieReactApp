import React from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  return (
    <form action="" className={classes.form}>
      <Input
        label="Amount"
        input={{
          // default props to add for the input element
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
}
