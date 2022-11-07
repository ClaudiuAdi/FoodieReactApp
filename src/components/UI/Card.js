import React from "react";

import classes from "./Card.module.css";

// a simple component, more of a wrapper that provides style and structure
export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
