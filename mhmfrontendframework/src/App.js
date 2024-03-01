import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Stressometer from "./components/Stressometer";
import About from "./components/About";
import View from "./components/View";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import Logout from "./components/Logout";
import HeroSection from "./components/HeroSection";
import Navbarb from './components/Navbar-b'


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function App() {
  return (
    <div className="App">
      
      <Navbar />
     
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/s" element={<HeroSection />} /> */}

            <Route path="/login" element={<LoginPage />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/user" element={<PrivateRoutes />} >

                    <Route path="view" element={<View />} />
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="stressometer" element={<Stressometer />} />

                    <Route path="logout" element={<Logout />} />

            </Route>
          </Routes>
        </div>
    
  );
}

export default App;
