import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addtoCartHandler = (piece) => {
    cartCtx.addCartItem({
      id: props.id,
      name: props.name,
      piece: piece,
      price: props.price,
    });
  };
  const removeFromCartHandler = (id) => {
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addtoCartHandler} />
        <button onClick={removeFromCartHandler}>removes</button>
      </div>
    </li>
  );
}

export default MealItem;
