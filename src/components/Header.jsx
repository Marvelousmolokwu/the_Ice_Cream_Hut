import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" p-6 text-nicePink font-grand text-4xl ">
        <Link to="/">
          <div className="flex  items-center ">
            <button className=" mb-3 -mr-6">
              <img src="/src/assets/icons8-13-70.png" alt="" className="mr-6" />
            </button>

            <h1 className=" w-full">Icee-Kream-Hut</h1>
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
