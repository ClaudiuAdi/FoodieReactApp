import React from "react";

import classes from "./Input.module.css";

// universal input component
const Input = React.forwardRef((props, ref) => {
  //used 'forwardRef' becase it is a custom component in order to receive the ref from the parent element and use it
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*1). makes the input recive all the other configuration data for the input 2).and the ref in order to get access to the input through refs*/}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
