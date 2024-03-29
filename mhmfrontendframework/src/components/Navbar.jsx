import React from "react";
import { Link, useLocation  } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "./Logout";
import { isLoggedIn } from "./authUtils";
import './Navbar.css'
const Navbar = () => {
  const [navActive, setNavActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn());


  const [navColor, setNavColor] = useState(false);
  const location = useLocation();
  const changeNavColor = () => {
    if(window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }
  window.addEventListener('scroll', changeNavColor)

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
    <main className={navColor ? "fixed h-16 bg-slate-900 w-full z-20 text-slate-300" : "fixed h-16 w-full z-20 text-slate-300"}>
      <div className="mt-5 mr-7  hidden md:block ease-in-out">
        <Link to="/">
        <h1 className="absolute text-4xl ml-7 flex mt-[-8px] font-bold font-spaceGrotesk ml-3">
          MHM
        </h1>
        </Link>
        <ul className="flex justify-end space-x-4 font-spaceGrotesk md:space-x-7 mr-10 text-lg ">
          
          {userLoggedIn ? (
            <>
            <Link to="/user/dashboard" className="hover:drop-shadow-glow hover:border-b-2 border-white-400">
              Dashboard
            </Link>
            <Link to="/user/view" className="hover:drop-shadow-glow hover:border-b-2 border-white-400">
            View
          </Link>
          <Link to="/user/stressometer" className="hover:drop-shadow-glow hover:border-b-2 border-white-400">
            Stressometer
          </Link>
          </>
          ) : (
            
            <>
            {location.pathname === '/login' || location.pathname === '/signup'? "": 
            <>
            {location.pathname === '/about'?
         <>
         <Link to="/" className="hover:drop-shadow-glow hover:border-b-2 border-white-400">
          Home
        </Link>
        <Link to="/" className="hover:drop-shadow-glow hover:border-b-2 border-white-400">
          Services
        </Link>
        <Link to="/about" className="active hover:drop-shadow-glow hover:border-b-2 border-white-400">
          About us
        </Link></>: 
        <>
        <ScrollLink activeClass="border-b-2 border-cyan-400" smooth spy offset={-60} to='home' className="hover:drop-shadow-glow hover:border-b-2 border-white-400 cursor-pointer	">
            Home
          </ScrollLink>
          <ScrollLink activeClass="border-b-2 border-cyan-400" smooth spy offset={-60} to='services' className="hover:drop-shadow-glow hover:border-b-2 border-white-400 cursor-pointer	">
          Services
      </ScrollLink>
        <Link to="/about" className="hover:drop-shadow-glow hover:border-b-2 border-white-400">
          About us
        </Link></>}

            
            


         {/* this navbar code is in life support. please don't change anything  :(*/}
         
        
        </>
            }
            
        </>
          )}

          {userLoggedIn ? <Logout /> : <Link to="/login" className={location.pathname === '/login' || location.pathname === '/signup' ? 'active hover:drop-shadow-glow hover:border-b-2 border-white-400' : 'hover:drop-shadow-glow hover:border-b-2 border-white-400'}>
          
          {location.pathname === '/signup' ? "Signup":"Login"}
          </Link>}
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
      <div className={!navActive ? "backdrop-blur-md  h-[40vh] w-[40%] mt-[-50px] border-2 border-slate-500 rounded-md text-slate-300 md:hidden transition ease-in-out" : "hidden ease-in-out"}>

      <div className={!navActive ? "backdrop-blur-md  h-[50vh] w-[40%] mt-[-50px] border-2 border-slate-500 rounded-md text-slate-300 md:hidden transition ease-in-out" : "hidden ease-in-out"}>
        <div>

      <h1 className="text-4xl text-slate-300 font-bold font-spaceGrotesk ml-3 mt-2.5">
          MHM
        </h1>
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
