import React from 'react'

const Aboutprops = ({img, name, role, bio }) => {
  return (
    <div className=" flex flex-col justify-center backdrop-blur-lg items-center  w-full md:w-1/3 border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      {/* <div className=" flex flex-col justify-center"> */}
      <img src={img} alt="team member" className="w-32 h-32 rounded-full object-cover mb-2" />
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-white mb-1 mx-auto">{role}</p>
      <p className="text-white">{bio}</p>
    </div>
    // </div>
  );
};

export default Aboutprops;