import { motion } from "framer-motion";
import { useEffect } from "react";
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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ iceCream, setShowmodal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowmodal(true);
    }, 5000);
  }, [setShowmodal]);
  return (
    <>
      <motion.section
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-screen flex  items-center flex-col lg:max-w-[90%] mx-auto    bg-iceCream3  bg-contain bg-no-repeat px-10 text-center "
      >
        <h2 className="font-bold text-xl sm:text-3xl lg:text-4xl mt-[20vh] mb-4 ">
          Thank you for your Order! :)
        </h2>
        <motion.p variants={childrenVariants} className="text-lg sm:text-2xl">
          you ordered a {iceCream.base} flavored iceCream with
          {iceCream.topping.map((topping) => (
            <div key={topping}>{topping} topping</div>
          ))}
          {iceCream.topping.length < 1 && <div>no topping</div>}
        </motion.p>
      </motion.section>
    </>
  );
};

export default Order;
