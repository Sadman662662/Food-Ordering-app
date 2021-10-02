import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isCartOverlay, setIsCartOverlay] = useState(false);

  const cartOpenHandler = () => {
    setIsCartOverlay(true);
  };
  const cartCloseHandler = () => {
    setIsCartOverlay(false);
  };
  return (
    <CartProvider>
      {isCartOverlay && <Cart onCartClose={cartCloseHandler} />}
      <Header onCartOpen={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
