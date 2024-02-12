import React from "react";
import {useTypingEffect} from "./customhooks/typingeffect";
import { Link } from "react-router-dom";
import './Home.css'; 
import backgroundimage from '../assets/backgroundimage.svg';


const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // color: '#ffffff', // Adjust text color for visibility
  };

  // const subtext = useTypingEffect("Fill this ok.",400);

  return (
  <div className='text-black items-center'>
    <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Welcome to <span className="text-5xl font-semibold text-custom-green">MHM</span>
      </h1>
      <p className='md:text-2xl text-xl font-bold md:justify-between justify-center my-4 text-mycolor'>
        We understand the importance of mental health and wellbeing. Our mission is to provide <span className="text-white font-bold">A Safe and Supportive Space</span> for you to explore, learn, and nurture your mental wellness.
      </p>
      <div className="flex justify-center items-center ">
        <h3 className="mr-4 mt-10">ARE YOU READY TO EXPLORE?</h3>
        <Link to="/login">
          <button className="bg-custom-green hover:bg-custom-hover text-white font-bold py-2 px-4 rounded-full mt-24">Get started</button>
        </Link>
      </div>
    </div>
  </div>
);

};



export default Home;
