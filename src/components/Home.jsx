import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function exploreCourse() {

    navigate('/course')
    
  }

  return (
    <div className="home-heading">
      <h1 className="first-heading">Unlock Your Academic Potential !</h1>
      <p className="home-para">
        "Studying? We've Got the Questions, You Find the Answers"<br></br>
        "Exams Got You Down? Our Question Bank Will Cheer You Up!"
      </p>
      <div className="btn-div">
      <button className="explore-btn" onClick={exploreCourse}>
        Explore
      </button>
      <button className="explore-btn">Sayllbus</button>
      </div>
    </div>
  );
}
