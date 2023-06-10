import { Link } from "react-router-dom";

const Toppings = ({ iceCream, addTopping }) => {
  const toppings = [
    "Chocolate-chips",
    "Gummy Bears",
    "Peanuts",
    "Fruits",
    "Cookies",
    "Butter-Scotch",
    "Rainbow sprinkles",
    "Candy",
  ];
  return (
    <>
      <section>
        <section className="h-screen  lg:max-w-[90%] mx-auto flex  items-start justify-center  gap-4 bg-iceCream3 bg-cover  lg:bg-none px-10 ">
          <img
            src="/src/assets/ice-cream (1).png"
            className="hidden lg:block"
          />
          <div className="">
            <h3 className="font-bold text-xl sm:text-3xl lg:text-4xl mt-[10vh] lg:mt-[3vh] mb-4 ">
              Step 2: Choose your Topping!
            </h3>
            <ul className="flex flex-col gap-4 text-xl lg:text-2xl cursor-pointer">
              {toppings.map((Topping) => {
                let spanClass = iceCream.topping.includes(Topping)
                  ? "active"
                  : "";
                return (
                  <li key={Topping}>
                    <span
                      className={`lists ${spanClass}`}
                      onClick={() => addTopping(Topping)}
                    >
                      {Topping}
                    </span>
                  </li>
                );
              })}
            </ul>
            {iceCream.topping && (
              <Link to="/order">
                <button className="bg-[#000] text-white border-2 border-[#000] px-10 py-2 rounded-lg mt-4">
                  Order
                </button>
              </Link>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Toppings;
