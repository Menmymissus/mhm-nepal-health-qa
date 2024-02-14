import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "./Logout";
import { isLoggedIn } from "./authUtils";

const Navbar = () => {
  const [navActive, setNavActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUserLoggedIn(isLoggedIn());
    }, 1000); // Check every second for changes in authentication status

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  function handleClick() {
    setNavActive(!navActive);
  }

  return (
    <main className="relative z-20 text-slate-300">
      <div className="mt-5 mr-7 hidden md:block ease-in-out">
        <h1 className="absolute text-4xl flex mt-[-8px] font-bold font-spaceGrotesk ml-3">
          MHM
        </h1>
        <ul className="flex justify-end space-x-4 font-spaceGrotesk md:space-x-7 mr-10 ">
          {userLoggedIn ? (
            <Link to="/user/dashboard" className="hover:drop-shadow-glow">
              Home
            </Link>
          ) : (
            <Link to="/" className="hover:drop-shadow-glow">
              Home
            </Link>
          )}

          <Link to="/user/view" className="hover:drop-shadow-glow">
            View
          </Link>
          <Link to="/stressometer" className="hover:drop-shadow-glow">
            Stressometer
          </Link>
          <Link to="/about" className="hover:drop-shadow-glow">
            About us
          </Link>
          {userLoggedIn && <Logout />}
        </ul>
      </div>
      <div className="md:hidden justify-end flex mt-4 mr-4">
        {navActive ? (
          <button onClick={handleClick}>
            {" "}
            <MenuIcon />
          </button>
        ) : (
          <button onClick={handleClick}>
            {" "}
            <CloseIcon />
          </button>
        )}
      </div>
      <h1 className="text-4xl text-slate-300 font-bold font-spaceGrotesk ml-3 mt-[-32px]">
          MHM
        </h1>
      <div className={!navActive ? "backdrop-blur-md  h-[50vh] w-[40%] mt-[-50px] border-2 border-slate-500 rounded-md text-slate-300 md:hidden ease-in-out" : "hidden ease-in-out"}>
      <h1 className="text-4xl text-slate-300 font-bold font-spaceGrotesk ml-3 mt-2.5">
          MHM
        </h1>
        <div>
          <ul className="font-spaceGrotesk text-xl  ml-3 flex flex-col space-y-3 pt-5">
          {userLoggedIn ? (
            <Link to="/user/dashboard" className="hover:drop-shadow-glow">
              Home
            </Link>
          ) : (
            <Link to="/" className="hover:drop-shadow-glow">
              Home
            </Link>
          )}
            <Link to="/user/view">View</Link>
            <Link to="/stressometer">Stressometer</Link>
            <Link to="/about">About us</Link>
            <div>{userLoggedIn && <Logout />}</div>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
