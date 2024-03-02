import React from 'react'
import './HeroSection.css'
import Navbarb from './Navbar-b'
import Services from './Services'
import Footer from './Footer'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'


function HeroSection() {
  return (
    <>
    {/* <Navbarb /> */}
    {/* <div class="overlay"></div> */}
    <div id='home' className='hero-container '>
        <video src="/videos/0227(1).mp4" autoPlay muted loop />
        {/* <img src="/images/calm-night-at-river-vector.jpg"></img> */}
    <h1>WELCOME TO MHM</h1>
    <p>

    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Your Mental Health Matters.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      
      .start();
  }} />

    </p>
    <div className="getstarted">

    <Link to="/login">
          <button className="transition ease-in-out delay-150 bg-blue-300 hover:bg-blue-700 hover:text-white text-black font-bold font-spaceGrotesk py-2 px-4 rounded-full mt-10 justify-center">Get started</button>
        </Link>
    </div>
    
    </div>
    {/* <div className='hero-btns'> */}
    {/* <button className='btns'>Get Started</button> */}
    {/* </div> */}
    <Services />
    <Footer />
    </>
  )
}

export default HeroSection