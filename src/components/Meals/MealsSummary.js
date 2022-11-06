import React from "react";

import classes from "./MealsSummary.module.css";

// Main title text
export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        nobis perferendis minima laudantium excepturi doloremque unde provident
        similique, odit voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
        placeat, voluptate blanditiis consectetur accusamus quod quas qui
        exercitationem eveniet.
      </p>
    </section>
  );
}
