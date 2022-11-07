import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  // we manage the state in App.js bc we render the cart here
  const [cartIsShow, setCartIsShown] = useState(false);

  // function handlers for toggling the state of the modal
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // all the components in the App.js file need acces to the cart context
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      {/* passing the function down to the children */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
