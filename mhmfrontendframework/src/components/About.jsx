import background from '../assets/background.png';
import Aboutprops from './Aboutprops';
import React from "react";
import img1 from "../assets/bharat.jpg";
import img2 from "../assets/bibek.jpg";
import img3 from "../assets/background.png";
import img4 from "../assets/background.png";
import MyFooter from './MyFooter';

const About = () => {
  const teamMembers = [
    {
      img: img1,
      name: "Bharat Thapa",
      role: "",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: img2,
      name: "Bibek Ban",
      role: "",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: img3,
      name: "Chhabilal Acharya",
      role: "",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: img4,
      name: "Yunisha Baskota",
      role: "",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
     <main className="overflow-y-auto"> 
    <div className="absolute top-0 left-0 h-full w-full bg-cover text-slate-300 font-spaceGrotesk space-x-4 min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5" style={{backgroundImage:`url(${background})`}}>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {teamMembers.map((member, index) => (
          <Aboutprops key={index} img={member.img} name={member.name} role={member.role} bio={member.bio} />
        ))}
      </div>
    </div>
 <MyFooter/> 
    </main>


  );
};

export default About;