import Header from "./components/Header";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toppings from "./components/toppings";
import Order from "./order";
import Base from "./components/base";
import { useState } from "react";

function App() {
  const [iceCream, setIceCream] = useState({ base: "", topping: [] });

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
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/base"
            element={<Base addBase={addBase} iceCream={iceCream} />}
          ></Route>
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} iceCream={iceCream} />}
          ></Route>
          <Route path="/order" element={<Order iceCream={iceCream} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
