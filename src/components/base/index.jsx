import { Link } from "react-router-dom";

const Base = ({ iceCream, addBase }) => {
  const bases = [
    "Vanilla",
    "Cookie and Cream",
    "Strawberry",
    "Banana",
    "Chocolate",
    "Butter-Scotch",
  ];
  return (
    <>
      <section className="h-screen  lg:max-w-[90%] mx-auto flex  items-start justify-center  gap-4 bg-iceCream3 bg-cover  lg:bg-none  ">
        <img src="/src/assets/ice-cream (1).png" className="hidden lg:block" />
        <div className="">
          <h3 className="font-bold text-xl sm:text-3xl lg:text-4xl mt-[15vh] mb-4 ">
            Step 1: Choose your Flavor!
          </h3>
          <ul className="flex flex-col gap-4 text-xl lg:text-2xl cursor-pointer">
            {bases.map((base) => {
              let spanClass = iceCream.base === base ? "active" : "";
              return (
                <li
                  key={base}
                  onClick={() => {
                    addBase(base);
                  }}
                >
                  <span className={`lists ${spanClass}`}>{base}</span>
                </li>
              );
            })}
          </ul>
          {iceCream.base && (
            <Link to="/toppings">
              <button className="px-10 py-2 border-2 border-[#000] rounded-lg mt-4">
                Next
              </button>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Base;
