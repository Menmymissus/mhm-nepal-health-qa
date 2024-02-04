import React from "react";
import {useTypingEffect} from "./customhooks/typingeffect";
import { Link } from "react-router-dom";

const Home = () => {

  const subtext = useTypingEffect("Fill this ok.",400);

  return (
    <>
      <main className="absolute top-0 left-0 h-screen w-full bg-orange-100 flex items-center justify-center">
        <div className="">
          <div className="font-bold font-spaceGrotesk text-xl">
            Hello, This is Home screen.
          </div>
          <div className="text-center font-spaceGrotesk">{subtext}</div>
          
        </div>
        <div className="flex justify-center mt-10">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-20 flex flex-col justify-center">Get started</button>
        </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
