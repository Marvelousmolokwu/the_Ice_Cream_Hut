import Header from "./components/Header";
import Home from "./components/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Toppings from "./components/toppings";
import Order from "./order";
import Base from "./components/base";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/modal";

function App() {
  const [iceCream, setIceCream] = useState({ base: "", topping: [] });
  const [showModal, setShowmodal] = useState(false);

  const addBase = (base) => {
    setIceCream({ ...iceCream, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!iceCream.topping.includes(topping)) {
      newToppings = [...iceCream.topping, topping];
    } else {
      newToppings = iceCream.topping.filter((item) => item !== topping);
    }

    setIceCream({ ...iceCream, topping: newToppings });
  };
  const location = useLocation();
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowmodal={setShowmodal} />
      <AnimatePresence onExitComplete={() => setShowmodal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/base"
            element={<Base addBase={addBase} iceCream={iceCream} />}
          ></Route>
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} iceCream={iceCream} />}
          ></Route>
          <Route
            path="/order"
            element={<Order iceCream={iceCream} setShowmodal={setShowmodal} />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
