import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <>
      <header className=" p-6 text-nicePink font-grand text-4xl ">
        <Link to="/">
          <motion.div className="flex  items-center ">
            <button className=" mb-3 -mr-6">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686588606/icons8-13-70_exxg3f.png"
                alt=""
                className="mr-6"
              />
            </button>

            <motion.h1
              initial={{ y: -250 }}
              animate={{ y: -5 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className=" w-full"
            >
              Icee-Kream-Hut
            </motion.h1>
          </motion.div>
        </Link>
      </header>
    </>
  );
};

export default Header;
