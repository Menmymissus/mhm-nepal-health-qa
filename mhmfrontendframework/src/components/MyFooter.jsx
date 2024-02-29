import React from "react";
import { Link } from "react-router-dom";


import { Footer, FooterTitle } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const MyFooter = () => {
return (
<Footer container>
      <div className="w-full text-white backdrop-blur-lg fixed bottom-0 left-0 overflow-y-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="px-10 ">
          <Footer.Title title="MHM" className="md:text-3xl"/>
          </div>
          <div className="grid grid-cols-7 gap-10 sm:mt-1 md:gap-9 justify-items-center"> 
            <div className="col-start-1">
            <Link to="/" className="hover:drop-shadow-glow">
              <Footer.Title title="Home" />
            </Link>
            </div>
            <div>
            <Link to="/user/view" className="hover:drop-shadow-glow">
            <Footer.Title title="View" />
            </Link>
            </div>
            <div>
            <Link to="/stressometer" className="hover:drop-shadow-glow">
            <Footer.Title title="Stressometer" />
            </Link>
            </div>
            <div>
            <Link to="/about" className="hover:drop-shadow-glow">
            <Footer.Title title="About Us" />
            </Link>
            </div>
            <div className="col-start-6">
              <Footer.Title title="ContactUs" />

            <div className="mt-2 flex space-x-6 sm:mt-0 sm:mt-2 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
            </div>
          </div>
        </div>
        {/* <Footer.Divider />  */}
        <Footer.Divider className="my-1" />
        <div className="w-full sm:flex items-center  justify-center">
          <Footer.Copyright href="#" by="MentalHealthMatters™" year={2024} />
          </div>
        </div>
    </Footer>

  );
};
export default MyFooter;