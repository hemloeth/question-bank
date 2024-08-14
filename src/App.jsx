import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import Refresh from "./components/Refresh";
import Course from "./components/Course";
import Academicyear from "./components/Academicyear"
import Firstyear from "./components/Firstyear";
import Secondyear from "./components/Secondyear";
import Thirdyear from "./components/Thirdyear";
import Fourthyear from "./components/Fourthyear";
import Csefirstsem from "./components/Csefirstsem";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Refresh/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course/>} />
          <Route path="/academicyear/:course" element={<Academicyear />} />
          <Route path="/firstyear/:course" element={<Firstyear/>} />
          <Route path="/secondyear/:course" element={<Secondyear/>} />
          <Route path="/thirdyear/:course" element={<Thirdyear/>} />
          <Route path="/fourthyear/:course" element={<Fourthyear/>} />
          <Route path="/csefirstsem" element={<Csefirstsem/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
