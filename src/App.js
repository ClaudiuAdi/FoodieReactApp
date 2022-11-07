import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

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
    <>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      {/* passing the function down to the children */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
