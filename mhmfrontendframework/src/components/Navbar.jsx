import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <main className='relative z-20'>
    <div className='mt-5 mr-7'>
      <h1 className='absolute text-4xl flex mt-[-8px] font-bold font-spaceGrotesk ml-3'>MHM</h1>
      <ul className='flex justify-end space-x-4 font-spaceGrotesk md:space-x-7 mr-10'>
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