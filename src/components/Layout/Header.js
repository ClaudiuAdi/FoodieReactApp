import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals_img2.jpg";
import classes from "./Header.module.css";

// header of the app
export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="5 different dishes on a table" />
      </div>
    </>
  );
}
