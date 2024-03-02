import React from "react";
import {useTypingEffect} from "./customhooks/typingeffect";
import { Link } from "react-router-dom";
import background from '../assets/background.png';
import Typewriter from 'typewriter-effect';
import Services from './Services'
import Footer from './Footer'

const Home = () => {

  const subtext = useTypingEffect("Fill this ok.",400);

  return (
    <>
      <main id="home" className="absolute top-0 left-0 h-screen w-full flex items-center justify-center bg-cover text-slate-300" style={{backgroundImage:`url(${background})`}}>
        <div className="flex-row">
          <div className=" flex items-center justify-center font-bold font-spaceGrotesk text-xl">
            Welcome to MHM
          </div>
          <div className=" flex flex-col text-center font-spaceGrotesk">  
          {/* {subtext} */}
          We understand the importance of mental health and wellbeing. Our mission is to provide 
          <h1 className=" bold font-spaceGrotesk">A safe and Supportive Space</h1>
           
           <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('For you to explore, learn and nurture your mental wellness.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      
      .start();
  }}
/>
          </div>
        <div className="flex items-end justify-end flex-row">
        <Link to="/login">
          <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold font-spaceGrotesk py-2 px-4 rounded-full mt-20 justify-center">Get started</button>
        </Link>
        </div></div>
      </main>
    </>
  );
};

export default Home;
