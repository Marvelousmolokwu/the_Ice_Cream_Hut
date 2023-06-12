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
};
const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
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
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
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
      <motion.section
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-screen  lg:max-w-[90%] mx-auto flex  items-start justify-center  gap-4 bg-iceCream3 bg-cover  lg:bg-none  "
      >
        <img src="/src/assets/ice-cream (1).png" className="hidden lg:block" />
        <div className="">
          <h3 className="font-bold text-xl sm:text-3xl lg:text-4xl mt-[15vh] mb-4 ">
            Step 1: Choose your Flavor!
          </h3>
          <ul className="flex flex-col gap-4 text-xl lg:text-2xl cursor-pointer">
            {bases.map((base) => {
              let spanClass = iceCream.base === base ? "active" : "";
              return (
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0, color: "#FC5D75" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={base}
                  onClick={() => {
                    addBase(base);
                  }}
                >
                  <span className={` ${spanClass}`}>{base}</span>
                </motion.li>
              );
            })}
          </ul>
          {iceCream.base && (
            <motion.div variants={nextVariants}>
              <Link to="/toppings">
                <motion.button
                  variants={hoverVariants}
                  whileHover="hover"
                  className="px-10 py-2 border-2 border-[#000] rounded-lg mt-4"
                >
                  Next
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Base;
