import React from "react";

import classes from "./Input.module.css";

// universal input component
export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* makes the input recive all the other configuration data for the input */}
      <input {...props.input} />
    </div>
  );
}
