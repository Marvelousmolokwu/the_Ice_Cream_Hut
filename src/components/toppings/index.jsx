import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContainerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const hoverVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 2px rgb(0,0,0)",
    boxShadow: "0px 0px 2px rgb(0, 0, 0)",
    transition: {
      duration: 0.3,
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};
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
      <motion.section
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-screen  lg:max-w-[90%] mx-auto flex  items-start justify-center  gap-4 bg-iceCream3 bg-cover  lg:bg-none px-10 "
      >
        <img src="/src/assets/ice-cream (1).png" className="hidden lg:block" />
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
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0, color: "#FC5D75" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={Topping}
                >
                  <span
                    className={` lists ${spanClass}`}
                    onClick={() => {
                      addTopping(Topping);
                    }}
                  >
                    {Topping}
                  </span>
                </motion.li>
              );
            })}
          </ul>
          {iceCream.topping && (
            <Link to="/order">
              <motion.button
                variants={hoverVariants}
                animate="hover"
                className="bg-[#000] text-white border-2 border-[#000] px-10 py-2 rounded-lg mt-4"
              >
                Order
              </motion.button>
            </Link>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Toppings;
