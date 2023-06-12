import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../loader";
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
const ContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { delay: 1, duration: 1 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <>
      <motion.div
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex items-center flex-col h-screen bg-iceCream3 bg-cover  lg:bg-auto lg:bg-center  bg-no-repeat "
      >
        <motion.h1
          className=" font-bold text-xl sm:text-3xl lg:text-6xl text-black my-4 mt-52  lg:mt-[13vh] "
          animate={{}}
        >
          Welcome to the Icee-Kream Hut!
        </motion.h1>
        <Link to="/base">
          <motion.button
            variants={hoverVariants}
            whileHover="hover"
            className=" border-2 border-[#000]  rounded-xl text-lg sm:text-2xl  text-black px-3 sm:px-4 lg:px-8 py-4 mt-4"
          >
            Create Your Icee Kream
          </motion.button>
        </Link>
        <Loader />
      </motion.div>
    </>
  );
};

export default Home;
