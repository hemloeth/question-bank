import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Academicyear.css";

function Academicyear() {
  const { course } = useParams();
  const navigate = useNavigate();
  const years = ["1st year", "2nd year", "3rd year", "4th year"];

  const handleYearClick = (year) => {
    if (year === "1st year") {
      navigate(`/firstyear/${encodeURIComponent(course)}`);
    } else if (year === "2nd year") {
      navigate(`/secondyear/${encodeURIComponent(course)}`);
    } else if (year === "3rd year") {
      navigate(`/thirdyear/${encodeURIComponent(course)}`);
    } else if (year === "4th year") {
      navigate(`/fourthyear/${encodeURIComponent(course)}`);
    } else {
      navigate(`/course/${encodeURIComponent(course)}/${year}`);
    }
  };

  return (
    <div className="academic-container">
      <h2 className="academic-heading">Academic Years for {course}</h2>
      <div className="year-container">
        {years.map((year, index) => (
          <div
            key={index}
            onClick={() => handleYearClick(year)}
            className="year-box"
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academicyear;


