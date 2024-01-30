import Navbar from "./components/Navbar";
import {Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import View from "./components/View";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/view" element={<View />}/>
      </Routes>
    </div>
  );
}

export default App;
