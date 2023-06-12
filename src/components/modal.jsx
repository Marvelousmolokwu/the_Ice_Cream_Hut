import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
const Modal = ({ showModal }) => {
  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className=" fixed top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.5)]"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              variants={modal}
              className="max-w-[280px] lg:max-w-[400px] mx-auto py-10 px-6 bg-white rounded-xl text-center"
            >
              <p className="text-brown font-bold">
                Want to make another Icee Kream ?
              </p>

              <button
                onClick={() => {
                  navigate("/");
                  window.location.reload(true);
                }}
                className="text-brown border-2 border-brown font-bold mt-6 rounded-xl px-4 py-2"
              >
                Start Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
