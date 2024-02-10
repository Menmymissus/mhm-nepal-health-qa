import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logout from './Logout';
import { isLoggedIn } from './authUtils';




const Navbar = () => {

const[navActive, setNavActive]= useState(true);
const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn())


function handleClick(){
  setNavActive(!navActive);
}

  return (
    <main className='relative z-20'>
    <div className='mt-5 mr-7 hidden md:block ease-in-out'>
      <h1 className='absolute text-4xl flex mt-[-8px] font-bold font-spaceGrotesk ml-3'>MHM</h1>
      <ul className='flex justify-end space-x-4 font-spaceGrotesk md:space-x-7 mr-10'>
        <Link to="/">Home</Link>
        <Link to="/user/view">View</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Logout />
        
         
        
      </ul>
    </div>
    <div className='md:hidden justify-end flex mt-4 mr-4'>
      {navActive ?<button onClick={handleClick}> <MenuIcon /></button> :<button onClick={handleClick}> <CloseIcon /></button>}
    </div>
 <h1 className='text-4xl mt-[-29px]  font-bold font-spaceGrotesk ml-3'>MHM</h1>
    <div className={!navActive ? 'mt-5 mr-7 fixed bg-slate-50 bg-opacity-5 flex-col md:hidden' : 'hidden'}>
 
  <ul className='font-spaceGrotesk md:space-y-7 ml-3 flex flex-col space-y-3 pt-3'>
    <Link to="/">Home</Link>
    <Link to="/view">View</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact</Link>
  </ul>
</div>

    </main>
  );
}

export default Navbar ;