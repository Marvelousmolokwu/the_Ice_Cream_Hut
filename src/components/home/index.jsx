import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex items-center flex-col h-screen bg-iceCream3 bg-cover  lg:bg-auto lg:bg-center  bg-no-repeat ">
        <h1 className=" font-bold text-xl sm:text-3xl lg:text-6xl text-black my-4 mt-52  lg:mt-[13vh] ">
          Welcome to the Icee-Kream Hut!
        </h1>
        <Link to="/base">
          <button className=" border-2 border-[#000]  rounded-xl text-lg sm:text-2xl  text-black px-3 sm:px-4 lg:px-8 py-4 mt-4">
            Create Your Icee Kream
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
