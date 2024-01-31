import React from "react";
import {useTypingEffect} from "./customhooks/typingeffect";

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
      </main>
    </>
  );
};

export default Home;
