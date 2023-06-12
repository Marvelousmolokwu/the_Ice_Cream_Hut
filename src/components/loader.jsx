import { motion } from "framer-motion";

const loadVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { duration: 0.5, repeatType: "reverse", repeat: Infinity },
      y: { duration: 0.25, repeatType: "reverse", repeat: Infinity },
      ease: "easeOut",
    },
  },
};
const Loader = () => {
  return (
    <>
      <motion.div
        variants={loadVariants}
        animate="animationOne"
        className="w-4 h-4 my-40 mx-auto rounded-full bg-white"
      ></motion.div>
    </>
  );
};

export default Loader;
