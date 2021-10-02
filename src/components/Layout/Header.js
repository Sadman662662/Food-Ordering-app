import React from "react";
import classes from "./Header.module.css";
import MealsImage from "../../assets/images/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onOpen={props.onCartOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full of Foods!!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
