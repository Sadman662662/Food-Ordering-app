import React, { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

function MealItemForm(props) {
  const [error, setError] = useState(true);
  const pieceInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPiece = pieceInputRef.current.value;
    const enteredPieceNumber = +enteredPiece;

    if (
      enteredPiece.trim().length === 0 ||
      enteredPieceNumber < 1 ||
      enteredPieceNumber > 5
    ) {
      setError(false);
      return;
    }
    props.onAddToCart(enteredPieceNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={pieceInputRef}
        label="Piece"
        input={{
          id: "Piece",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>

      {!error && <p>enter a valid number (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
